import { author, homepage, name, version } from '../../package.json';
import { TelegrafContext } from 'telegraf/typings/context';

const about = () => (ctx: TelegrafContext) => {
	const message = `*${name} ${version}*\n${author}\n${homepage} new fucking scrap`;
	return ctx.replyWithHTML(message);
};

export { about };
