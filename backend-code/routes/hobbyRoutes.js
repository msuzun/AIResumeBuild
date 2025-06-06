const express = require('express');
const router = express.Router();
const hobbyController = require('../controllers/hobbyController');
const auth = require('../middleware/auth');

router.get('/', auth, hobbyController.getAll);
router.post('/', auth, hobbyController.create);
router.delete('/:id', auth, hobbyController.delete);

module.exports = router;