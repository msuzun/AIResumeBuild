const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const auth = require('../middleware/auth');

router.get('/', auth, skillController.getAll);
router.post('/', auth, skillController.create);
router.delete('/:id', auth, skillController.delete);

module.exports = router;