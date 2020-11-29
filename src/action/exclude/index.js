const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

composer.on("text", async (ctx) => {
	if (ctx.chat.type === "private")
		if (!ctx.message["via_bot"])
			await ctx.replyWithAnimation(
				{ url: gifs.exclude },
				{
					parse_mode: "HTML",
					caption: message.invalid,
					reply_markup: keyboard.invalid,
				}
			);
});

middleware(composer);
consoles.module(__filename);
