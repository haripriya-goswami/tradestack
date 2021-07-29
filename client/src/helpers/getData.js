export default function getData(url) {
	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then(async (response) => {
			return await response.json();
		})
		.catch((err) => console.log(err));
}
