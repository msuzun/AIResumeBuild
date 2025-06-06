const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');
const auth = require('../middleware/auth');

router.get('/', auth, languageController.getAll);
router.post('/', auth, languageController.create);
router.delete('/:id', auth, languageController.delete);

module.exports = router;