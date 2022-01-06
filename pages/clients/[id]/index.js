import React from 'react';
import { useRouter } from 'next/router';

function ClientProjectsPage() {
	const router = useRouter();

	console.log(router.query);

	function loadProjectHandler() {
		// load data...
		router.push('/clients/max/projecta');
	}

	function loadProjectHandlerAlt() {
		// load data...
		router.push({
			pathname: '/clients/[id]/[clientprojectid]',
			query: { id: 'max', clientprojectid: 'projecta' }
		});
	}

	return (
		<div>
			<h1> The projects of a given client</h1>
			<h1>
				How to programatically navigate, similar to Link but done through an
				onClick handler and router.push() to the designated url(projecta in this
				case)
			</h1>
			<ul>
				<li>
					<button onClick={loadProjectHandler}>Load Project A</button>
				</li>
				<li>
					<button onClick={loadProjectHandlerAlt}>
						Load Project A Alternate Way(see code)
					</button>
				</li>
			</ul>
		</div>
	);
}

export default ClientProjectsPage;
