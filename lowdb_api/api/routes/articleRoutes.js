const express = require('express');
const router = express.Router();
const itemController = require('../controllers/articleController');

router.get('/articles', itemController.getItems);

module.exports = router;
