const express = require('express')
const router = express.Router()

const PeriodController = require('../controllers/PeriodController')

router.get('/', PeriodController.index)
router.get('/:id', PeriodController.show)
router.post('/', PeriodController.store)
//router.put('/:id', PeriodController.update)
//router.delete('/:id', PeriodController.destroy)

module.exports = router
