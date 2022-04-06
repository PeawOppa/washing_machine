const express = require('express');
const router = express.Router();
const controller = require('../../controllers/index');

// index
router.get('/', controller.showController.indexPage);

module.exports = router;