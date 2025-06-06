const express = require('express');
const router = express.Router();
const objectiveController = require('../controllers/objectiveController');
const auth = require('../middleware/auth');

router.get('/', auth, objectiveController.get);
router.post('/', auth, objectiveController.createOrUpdate);

module.exports = router;