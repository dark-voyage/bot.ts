import { Markup } from 'telegraf';
import { TelegrafContext } from '../types/telegraf';

const helpText =
	`<b>List of available commands:</b>` +
	`\n` +
	`\n` +
	`/help - <code>show this helper message</code>` +
	`\n` +
	`/check - <code>check health of API responses</code>` +
	`\n` +
	`/stats - <code>check admin stats of user</code>` +
	`\n` +
	`/students - <code>get infos about genemator's students</code>` +
	`\n` +
	`/links - <code>show genemator's url links</code>` +
	`\n` +
	`/stream - <code>show media creator's stream links</code>` +
	`\n` +
	`/join - <code>request to join our organisation</code>` +
	`\n` +
	`/minecraft - <code>minecraft server status ping</code>` +
	`\n` +
	`/feedback - <code>leave a feedback to admins</code>` +
	`\n` +
	`\n` +
	`<b>Admin commands:</b>` +
	`\n` +
	`/add - <code>add temporary admin</code>` +
	`\n` +
	`/send - <code>send message to users</code>` +
	`\n` +
	`/reset - <code>reset temporary admin list</code>` +
	`\n` +
	`/list - <code>list temporary admins</code>` +
	`\n` +
	`\n` +
	`<i>In order to use our inline mode, switch to inline mode ` +
	`by typing: @genemabot and then start typing something there.</i>`;

const helpGIF = "https://genemator.me/gifs/help.gif"
const helpKeyboard = Markup.inlineKeyboard([[Markup.switchToCurrentChatButton('Search Projects', '')]]);

const help = async (ctx: TelegrafContext) => {
	await ctx.replyWithAnimation(helpGIF, {
		parse_mode: 'HTML',
		caption: helpText,
		reply_markup: helpKeyboard,
	});
};

const helpAction = async (ctx: TelegrafContext) => {
	await ctx.editMessageMedia(
		{
			type: 'animation',
			media: helpGIF,
			caption: helpText,
		},
		{
			parse_mode: 'HTML',
			reply_markup: helpKeyboard,
		},
	);
};

export { help, helpAction };
