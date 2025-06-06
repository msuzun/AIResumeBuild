const express = require('express');
const router = express.Router();
const qualificationController = require('../controllers/qualificationController');
const auth = require('../middleware/auth');

router.get('/', auth, qualificationController.getAll);
router.post('/', auth, qualificationController.create);
router.delete('/:id', auth, qualificationController.delete);

module.exports = router;