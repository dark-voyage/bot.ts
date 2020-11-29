const { composer, middleware } = require("../../core/bot");

const gifs = require("../../database/db").gifs;
const consoles = require("../../layouts/consoles");
const env = require("../../core/env");

composer.hears(/\/feedback (.*)/gi, async (ctx) => {
	const feedbackText = ctx.match[1];
	await ctx.telegram.sendMessage(
		env.CONTROLLER,
		`<b>New feedback from</b> <code>${ctx.from.id}</code>:` +
			`\n` +
			`\n` +
			`<i>${feedbackText}</i>`,
		{
			parse_mode: "HTML",
		}
	);
	await ctx.replyWithHTML(
		`<b>Thank you for your feedback. Stay stunned for new updates!</b>`
	);
});

composer.hears(/\/feedback/, async (ctx) => {
	await ctx.replyWithAnimation(
		{ url: gifs.feedback },
		{
			parse_mode: "HTML",
			caption:
				`<b>You requested feedback command where you can send feedback to admins</b>` +
				`\n` +
				`\n` +
				`<i>In order to send a feedback to us, please use our templates shown below:</i>` +
				`\n` +
				`<code>/feedback &lt;your very long text here&gt;</code>` +
				`\n` +
				`\n` +
				`<i>Example:</i>` +
				`\n` +
				`<code>/feedback Hello dear admins. BSBA team is the best!</code>`,
		}
	);
});

middleware(composer);
consoles.module(__filename);
