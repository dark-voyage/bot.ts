import { NowResponse } from '@vercel/node';

export function ok(res: NowResponse, text = 'Ok') {
	res.status(200).json(text);
}
