import { json } from '@sveltejs/kit';

const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('$lib/entries/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const fileName = "/blog" + path.slice(16, -3);
			return {
				meta: metadata,
				path: fileName
			};
		})
	);

	return allPosts;
};


export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-expect-error - there is no error!
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};
