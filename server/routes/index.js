const usersRoutes = require('./data');

const constructorMethod = (app) => {
	
	app.use('/data', usersRoutes); // Public Data from wether api
	

	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Not Found' });
	});
};

module.exports = constructorMethod;