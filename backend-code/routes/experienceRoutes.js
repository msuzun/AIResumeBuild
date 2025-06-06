const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');
const auth = require('../middleware/auth');

router.get('/', auth, experienceController.getAll);
router.post('/', auth, experienceController.create);
router.delete('/:id', auth, experienceController.delete);

module.exports = router;