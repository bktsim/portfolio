export async function load({ params }) {
	const post = await import(`$lib/entries/${params.post}.md`);
	const { title, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date
	};
}