import { TelegrafContext } from '../types/telegraf';
import { Markup } from 'telegraf';

const linkGIF = 'https://genemator.me/gifs/links.gif';

const links = async (ctx: TelegrafContext) => {
	const links = [
		{
			name: 'Facebook',
			url: 'https://facebook.com/sakhib.orzklv',
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/genemator',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/genemator',
		},
		{
			name: 'Twitch',
			url: 'https://twitch.tv/genemators',
		},
		{
			name: 'VKontakte',
			url: 'https://vk.com/genemator',
		},
		{
			name: 'Telegram',
			url: 'https://t.me/genemators',
		},
		{
			name: 'GitHub',
			url: 'https://github.com/genemators',
		},
		{
			name: 'Steam',
			url: 'https://steamcommunity.com/id/genemator',
		},
	];
	const keyboard = [];
	for (let link of links) {
		keyboard.push([Markup.urlButton(link['name'], link['url'])]);
	}
	await ctx.replyWithAnimation(linkGIF, {
		caption: '<b>Here are social pages of Genemator:</b>',
		parse_mode: 'HTML',
		reply_markup: Markup.inlineKeyboard(keyboard),
	});
};

export { links };
