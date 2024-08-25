export const load = async ({ fetch }) => {
	const response = await fetch(`/posts`);
	const posts = await response.json();

	return {
		posts
	};
};