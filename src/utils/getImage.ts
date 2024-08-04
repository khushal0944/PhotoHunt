import axios from "axios";
import { config } from "dotenv";
config();

interface ParamsType {
	page?: number;
	perPage?: number;
	query?: string;
	type?: "curated" | "search";
}

export default async function getImage({
	page = 1,
	perPage = 18,
	query = "nature",
	type = "curated",
}: ParamsType) {
	const api_url = process.env.BASE_URL;
	const api_key = process.env.API_KEY;
	const result = await axios.get(`${api_url}/${type}`, {
		headers: {
			Authorization: api_key,
		},
		params: {
			query,
			page,
			per_page: perPage,
		},
	}).then((response) => response.data);
	console.log(result);
	return result;
}
