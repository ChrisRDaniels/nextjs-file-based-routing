import React from 'react';
import Link from 'next/link';

function ClientsPage() {
	const clients = [
		{ id: 'max', name: 'Maximilian' },
		{ id: 'chris', name: 'Christopher' },
		{ id: 'tim', name: 'Timothy' }
	];

	return (
		<div>
			<h1>The Clients Page</h1>
			<ul>
				<h1>
					More traditional way to build out a dynamic link with next js router (see
					code)
				</h1>
				{clients.map((client) => (
					<li key={client.id}>
						<Link href={`/clients/${client.id}`}>{client.name}</Link>
					</li>
				))}
			</ul>
			<ul>
				<h1>
					Alternative way to build out a dynamic link with next js router (see code)
				</h1>
				{clients.map((client) => (
					<li key={client.id}>
						<Link
							href={{
								pathname: '/clients/[id]',
								query: { id: client.id }
							}}
						>
							{client.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ClientsPage;
