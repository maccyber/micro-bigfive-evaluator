'use strict'

// Modules
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')

// Utils
const handlers = require('./lib/handlers')

// Initialize a new router
const router = Router()

// CORS
router.use(cors())

router.get('/', handlers.getFrontpage)
router.post('/', handlers.calculateScore)
router.post('/calculate', handlers.calculateScore)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}
