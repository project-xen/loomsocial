import { client } from '$lib/sanityClient.js';

export async function load({ params }) {
	const slug = params.slug;

	const data = await client.fetch(
		`*[_type == "post" &&
	    slug.current == "${slug}"]`
	);

	if (data) {
		return {
			post: data
		};
	}

	return {
		status: 500,
		body: new Error('Failed to fetch data...')
	};
}
