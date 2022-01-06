import React from 'react';
import { useRouter } from 'next/router';

function PortfolioProjectPage() {
	const router = useRouter();

	console.log(router.pathname);
	console.log(router.query);

	/* can send a request ro some backend server to fetch
  a piece of data with the id of router.query.projectid in the way
  that we currently have this setup (project id used in this example
    because we named the file [projectid].js) */

	return (
		<div>
			<h1>The Portfolio Project Page</h1>
		</div>
	);
}

export default PortfolioProjectPage;
