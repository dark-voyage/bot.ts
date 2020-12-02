import * as fuzzy from 'fuzzy';
import ds from '../lib/request';
import { TelegrafContext } from '../types/telegraf';
import { Markup } from 'telegraf';

const base = 'https://github.com/genemators/';
const thumb = 'https://genemator.me/favicon.png';
const inlineMessage = (data) =>
	`<b><a href="${data['html_url']}">〰 GitHub Project Review 〰</a></b>` +
	`\n` +
	`\n` +
	`<b>Description:</b> ${data['description']}` +
	`\n` +
	`<b>Programming Language:</b> ${data['language']}` +
	`\n` +
	`<b>Created Date:</b> ${data['created_at']}` +
	`\n` +
	`\n` +
	`<code>👁: ${data['watchers_count']}</code> <b>|</b> ` +
	`<code>🌟: ${data['stargazers_count']}</code> <b>|</b> ` +
	`<code>👥: ${data['subscribers_count']}</code> <b>|</b> ` +
	`<code>🔃: ${data['forks_count']}</code> <b>|</b> ` +
	`<code>❗: ${data['open_issues_count']}</code>`;
const inlineKeyboard = (data) =>
	Markup.inlineKeyboard(
		[
			Markup.urlButton(`GitHub`, `${data['html_url']}`),
			Markup.urlButton(`Download`, `https://github.com/${data['full_name']}/archive/master.zip`),
			Markup.switchToCurrentChatButton(`Repositories`, ``),
		],
		{ columns: 2 },
	);
const inline = async ({ inlineQuery, answerInlineQuery }: TelegrafContext) => {
	let results = [],
		indexation = 1,
		repos = await Object.values(await ds('https://api.github.com/users/genemators/repos')).map(function (obj) {
			return obj['name'];
		});
	let similarities = await fuzzy.filter(inlineQuery.query, repos).sort().slice(0, 20);
	let found = await similarities.map(function (obj) {
		return obj.string;
	});
	for (let key of found) {
		let data = await ds(`https://api.github.com/repos/genemators/${key}`);
		results.push({
			type: 'article',
			id: indexation,
			url: base + key,
			title: key,
			thumb_url: thumb,
			description: `${data['description']}`,
			reply_markup: inlineKeyboard(data),
			input_message_content: {
				message_text: inlineMessage(data),
				parse_mode: 'HTML',
				disable_web_page_preview: true,
			},
		});
		indexation++;
	}
	return answerInlineQuery(results);
};

export { inline };
