import React from 'react';
import { useRouter } from 'next/router';

//using the [...whatevername] ([...slug] in this case) along with the useRouter() allows you to have access to an array
// of dynamic file paths (i.e /blog/posts/1 would return {slug: ['posts', '1']} when viewed in the console.log and /blog/1/2/3/4 would return {slug: ['1','2','3','4']} and etc with no limit on the amount of array values which are determined per each /)

function BlogPostsPage() {
	const router = useRouter();

	console.log(router.query);
	return (
		<div>
			<h1>The Blog Posts</h1>
		</div>
	);
}

export default BlogPostsPage;
