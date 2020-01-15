const router = require('express').Router()
const menuRoute = require('./menu')

router.use('/menu', menuRoute)

module.exports = router