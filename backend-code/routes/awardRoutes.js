const express = require('express');
const router = express.Router();
const awardController = require('../controllers/awardController');
const auth = require('../middleware/auth');

router.get('/', auth, awardController.getAll);
router.post('/', auth, awardController.create);
router.delete('/:id', auth, awardController.delete);

module.exports = router;