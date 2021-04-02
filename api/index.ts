import { useWebhook } from "../src/core";
import { NowRequest, NowResponse } from "@vercel/node";

export default async function handle(req: NowRequest, res: NowResponse) {
	try {
		await useWebhook(req, res);
	} catch (e) {
		res.statusCode = 500;
		res.setHeader("Content-Type", "text/html");
		res.redirect("https://genemator.uz");
		console.error(e.message);
	}
}
