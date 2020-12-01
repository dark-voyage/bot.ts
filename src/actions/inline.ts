import * as fuzzy from 'fuzzy';
import * as message from '../layouts/messages';
import * as keyboard from '../layouts/keyboards';
import ds from '../database/ds';
import { TelegrafContext } from '../types/telegraf';

const inline = async ({ inlineQuery, answerInlineQuery }: TelegrafContext) => {
	let results = [],
		indexation = 1,
		base = `https://github.com/genemators/`,
		thumb = `https://genemator.me/favicon.png`;
	let repos = await Object.values(await ds('https://api.github.com/users/genemators/repos')).map(function (obj) {
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
			reply_markup: keyboard.inline(data),
			input_message_content: {
				message_text: message.inline(data),
				parse_mode: 'HTML',
				disable_web_page_preview: true,
			},
		});
		indexation++;
	}
	return answerInlineQuery(results);
};

export { inline };
