import { about, help, start, links, stream } from '..';
import Telegraf from 'telegraf';
import { ok } from './responses';
import { NowRequest, NowResponse } from '@vercel/node';
import { TelegrafContext } from '../types/telegraf';

const isDev = process.env.DEV;
const VERCEL_URL = process.env.VERCEL_URL;
const BOT_TOKEN = process.env.BOT_TOKEN;

export const bot = new Telegraf<TelegrafContext>(BOT_TOKEN);

let botUtils = async () => {
	bot.start(async (ctx: TelegrafContext) => await start(ctx));
	bot.help(async (ctx: TelegrafContext) => await help(ctx));
	bot.command('about', about());
	bot.command('stream', async (ctx: TelegrafContext) => await stream(ctx))
	bot.command('links', async (ctx: TelegrafContext) => await links(ctx))
};

let localBot = async () => {
	bot.webhookReply = false;
	const botInfo = await bot.telegram.getMe();
	bot.options.username = botInfo.username;
	console.info('Server has initialized bot username:', botInfo.username);
	await bot.telegram.deleteWebhook();
	await bot.launch();
};

export const useWebhook = async (req: NowRequest, res: NowResponse) => {
	try {
		if (!isDev && !VERCEL_URL) throw new Error('VERCEL_URL is not set.');

		const getWebhookInfo = await bot.telegram.getWebhookInfo();

		const botInfo = await bot.telegram.getMe();
		bot.options.username = botInfo.username;
		console.info('Server has initialized bot username using Webhook:', botInfo.username);

		if (getWebhookInfo.url !== VERCEL_URL + '/api') {
			await bot.telegram.deleteWebhook();
			await bot.telegram.setWebhook(`${VERCEL_URL}/api`);
		}

		await botUtils();

		if (req.method === 'POST') {
			await bot.handleUpdate(req.body, res);
		} else {
			ok(res, 'Listening to bot events...');
		}
	} catch (error) {
		return error.message;
	}
};

if (isDev) {
	localBot().then(async () => {
		await botUtils();
		await bot.launch();
	});
}
