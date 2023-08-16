require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')
// const errors = require('../middlewares/errors')

module.exports = function (app) {
	app.use(json())
	app.use(morgan('tiny'))

	app.use('/api/users', require('../routes/usersRoutes'))
	// app.use('/api/categories', require('../routes/categoriesRoutes'))
	// app.use('/api/movies', require('../routes/moviesRoutes'))
	// app.use('/api/scores', require('../routes/scoreRoutes'))
	// app.use(errors)
}