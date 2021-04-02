import { TelegrafContext } from '../types/telegraf';
import { Markup } from 'telegraf';

const start = async (ctx: TelegrafContext) => {
	await ctx.replyWithAnimation('https://genemator.uz/gifs/start.gif', {
		parse_mode: 'HTML',
		caption:
			`<b>Welcome to Genemator's Assistant!</b>` +
			`\n` +
			`\n` +
			`This bot helps you to manage with information about Genemator.` +
			`\n` +
			`With the help of this bot you can do:` +
			`\n` +
			`\n` +
			`<code>* Check current status of the Genemator</code>` +
			`\n` +
			`<code>* Check the students & their statuses</code>` +
			`\n` +
			`<code>* Check status of minecraft server</code>` +
			`\n` +
			`<code>* Check statuses of github repositories</code>` +
			`\n` +
			`<code>* Leave a feedback to admins</code>` +
			`\n` +
			`<code>* Request to join github organisation</code>` +
			`\n` +
			`\n` +
			`<i>In order to see full detailed usage information of the bot, press the button below.</i>`,
		reply_markup: Markup.inlineKeyboard([[Markup.callbackButton('Show detailed information', 'help')]]),
	});
};

export { start };
