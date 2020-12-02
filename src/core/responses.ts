import { NowResponse } from '@vercel/node';

export const ok = (res: NowResponse, text = 'Ok') => {
	res.status(200).json(text);
};
