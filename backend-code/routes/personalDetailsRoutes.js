const express = require('express');
const router = express.Router();
const personalDetailsController = require('../controllers/personalDetailsController');
const auth = require('../middleware/auth');

router.get('/', auth, personalDetailsController.get);
router.post('/', auth,personalDetailsController.createOrUpdate);

module.exports = router;