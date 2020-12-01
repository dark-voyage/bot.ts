import axios, { AxiosResponse } from 'axios';

export default async function (link): Promise<any> {
	return axios
		.get(link)
		.then((response: AxiosResponse) => {
			return response.data;
		})
		.catch(() => {
			return null;
		});
}
