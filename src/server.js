const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
	const server = Hapi.server({
		port: 1000,
		host: 'whynterhost',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();