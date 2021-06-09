const express = require('express')
const router = express.Router()

const VoteController = require('../controllers/VoteController')
const ResultController = require('../controllers/ResultController')

const auth = require('../middlewares/auth');

router.get("/", auth, VoteController.index);
router.get("/:projectId", auth, VoteController.show);
router.get("/:projectId/emails", auth, ResultController.show);
router.post("/", VoteController.store);

module.exports = router;
