//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const mainController = require('../controllers/main')
//specify which method of controller to run when accessing /fourth
router.get('/', mainController.getMainIndex)
//export router for use elsewhere
module.exports = router