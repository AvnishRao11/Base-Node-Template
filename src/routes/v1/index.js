const express = require('express');
const controller = require('../../controllers');

const router = express.Router();

router.get('/info', controller.infoController);

module.exports = router;


