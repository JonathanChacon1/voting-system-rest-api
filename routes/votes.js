const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');

router.post('/', voteController.castVote);
router.get('/', voteController.getVotes);
router.get('/statistics', voteController.getVoteStatistics);

module.exports = router;
