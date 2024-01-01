//@ts-nocheck
import { client } from '$lib/sanityClient.js';

export async function GET({ setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	});

	const site = 'https://loomsocial.com';
	const posts = await client.fetch(`*[_type == "post"]`);
	const pages = ['blog'];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
        <url>
            <loc>${site}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        ${pages
					.map(
						(page) =>
							`<url>
                <loc>${site}/${page}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>`
					)
					.join('')}
        ${posts
					.map(
						(post) =>
							`
                <url>
                    <loc>${site}/blog/${post.slug.current}</loc>
                    <changefreq>weekly</changefreq>
                    <lastmod>${new Date(post.datePublished).toISOString().split('T')[0]}</lastmod>
                    <priority>0.3</priority>
                </url>
                `
					)
					.join('')}
        </urlset>`;

	return new Response(sitemap);
}
