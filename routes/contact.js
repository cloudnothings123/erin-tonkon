//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const contactController = require('../controllers/contact')
//specify which method of controller to run when accessing /fourth
router.get('/', contactController.getContactIndex)
//export router for use elsewhere
module.exports = router