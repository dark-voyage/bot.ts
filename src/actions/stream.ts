import { TelegrafContext } from '../types/telegraf';
import { gifs } from '../database/db';
import * as message from '../layouts/messages';
import * as keyboard from '../layouts/keyboards';

const stream = async (ctx: TelegrafContext) => {
	await ctx.replyWithAnimation(gifs.stream, {
		caption: message.stream,
		parse_mode: 'HTML',
		reply_markup: keyboard.stream,
	});
};

export { stream };
