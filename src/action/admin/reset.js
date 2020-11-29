const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const security = require("../security");
const database = require("../../database/db");

composer.command(`reset`, async (ctx) => {
	await security(ctx, async () => {
		database.users["temporary"] = [];
		await ctx.replyWithAnimation(
			{ url: gifs.reset },
			{
				parse_mode: "HTML",
				caption: `<b>Temporary admins successfully reset!</b>`,
			}
		);
	});
});

middleware(composer);
consoles.module(__filename);
