const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');

router.post('/', voterController.registerVoter);
router.get('/', voterController.getVoters);
router.get('/:id', voterController.getVoterById);
router.delete('/:id', voterController.deleteVoter);

module.exports = router;
