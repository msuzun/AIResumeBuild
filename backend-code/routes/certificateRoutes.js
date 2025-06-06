const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');
const auth = require('../middleware/auth');

router.get('/', auth, certificateController.getAll);
router.post('/', auth, certificateController.create);
router.delete('/:id', auth, certificateController.delete);

module.exports = router;