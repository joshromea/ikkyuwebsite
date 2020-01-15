const router = require('express').Router()
const menuController = require('../../controllers/menuController')

router.route('/')
    .get(menuController.findAll)

module.exports = router