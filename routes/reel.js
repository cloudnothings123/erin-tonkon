//connect to express
const express = require('express')
//activate express router
const router = express.Router()
//specify location of necessary controller
const reelController = require('../controllers/reel')
//specify which method of controller to run when accessing /fourth
router.get('/', reelController.getReelIndex)
//export router for use elsewhere
module.exports = router