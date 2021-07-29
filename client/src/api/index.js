import axios from "axios";

export const getData = async (url) =>
	await (
		await axios.get(url).catch((err) => console.log(err))
	).data;

export const postData = async (url, data) =>
	await (
		await axios.post(url, data).catch((err) => console.log(err))
	).data;
