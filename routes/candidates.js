const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/', candidateController.registerCandidate);
router.get('/', candidateController.getCandidates);
router.get('/:id', candidateController.getCandidateById);
router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;
