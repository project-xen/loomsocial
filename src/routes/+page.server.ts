import { client } from '$lib/sanityClient.js';

export async function load() {
	const data = await client.fetch(`*[_type == "post"] | order(_updatedAt desc)`);

	if (data) {
		return {
			posts: data
		};
	}

	return {
		status: 500,
		body: new Error('Failed to fetch data')
	};
}
