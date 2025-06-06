const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.get('/', auth, projectController.getAll);
router.post('/', auth, projectController.create);
router.delete('/:id', auth, projectController.delete);

module.exports = router;