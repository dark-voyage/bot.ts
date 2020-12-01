import { TelegrafContext } from '../types/telegraf';
import { gifs } from '../database/db';
import * as message from '../layouts/messages';
import * as keyboard from '../layouts/keyboards';
import * as database from "../database/db"

const links = async (ctx: TelegrafContext) => {
	const links = database.links["links"];

	await ctx.replyWithAnimation(
		gifs.links,
		{
			caption: message.links,
			parse_mode: "HTML",
			reply_markup: await keyboard.links(links),
		}
	);
}

export { links }