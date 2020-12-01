import { TelegrafContext } from '../types/telegraf';
import { gifs } from '../database/db';
import * as message from '../layouts/messages';
import * as keyboard from '../layouts/keyboards';

const start = async (ctx: TelegrafContext) => {
	await ctx.replyWithAnimation(gifs.start, {
		parse_mode: 'HTML',
		caption: message.start,
		reply_markup: keyboard.start,
	});
};

export { start };
