const { logger } = require('./lib/config/winston')
const { v1 } = require('./routers/index')

const routers = async (app) => {
    app.use('/api/v1', v1)
}

module.exports.routers = routers