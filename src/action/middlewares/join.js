const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const env = require("../../core/env");

composer.hears(/\/join (.+)/gi, async (ctx) => {
	const memberTg = ctx.from.id;
	const memberId = ctx.match[1];

	await ctx.telegram.sendMessage(
		env.CONTROLLER,
		message.form_notification(memberTg, memberId),
		{
			disable_web_page_preview: true,
			parse_mode: "HTML",
			reply_markup: keyboard.form_admin(ctx.from.id),
		}
	);
	await ctx.replyWithHTML(message.form_status, {
		reply_markup: keyboard.form_request,
	});
});

composer.hears(/\/join/, async (ctx) => {
	await ctx.replyWithAnimation(
		{ url: gifs.join },
		{
			caption: message.form_guide,
			parse_mode: "HTML",
		}
	);
});

middleware(composer);
consoles.module(__filename);
