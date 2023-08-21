require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')
// const errors = require('../middlewares/errors')

module.exports = function (app) {
	app.use(json())
	app.use(morgan('tiny'))

	// app.use(helmet())
	// app.use(compression())

	app.use('/api/users', require('../routes/usersRoutes'))
	app.use('/api/suggestions', require('../routes/suggestionsRoutes'))
	app.use('/api/suggestions', require('../routes/commentsRoutes'))
	// app.use('/api/scores', require('../routes/scoreRoutes'))
	// app.use(errors)
}

// Repaso manejo de errores
// Autorización auth/admin
// optimizar para producción (helmet/compression)