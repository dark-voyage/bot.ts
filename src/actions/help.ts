import { TelegrafContext } from '../types/telegraf';
import { gifs } from '../database/db';
import * as message from '../layouts/messages';
import * as keyboard from '../layouts/keyboards';

const help = async (ctx: TelegrafContext) => {
	await ctx.replyWithAnimation(gifs.help, {
		parse_mode: 'HTML',
		caption: message.help,
		reply_markup: keyboard.help,
	});
};

export { help };
