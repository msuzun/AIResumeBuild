const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const auth = require('../middleware/auth');

router.get('/', auth, organizationController.getAll);
router.post('/', auth, organizationController.create);
router.delete('/:id', auth, organizationController.delete);

module.exports = router;