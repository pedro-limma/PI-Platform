const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/ProjectController')
const ClickController = require('../controllers/ClickController')

router.get("/", ProjectController.index);
router.get("/:id", ProjectController.show);
router.post("/", ProjectController.store);
//router.put("/:id", ProjectController.update);
//router.delete("/:id", ProjectController.destroy);

router.post("/click/:id", ClickController.increment);

module.exports = router;
