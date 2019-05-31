const express = require('express');
const controller = require('../controller/index-controller.js')
const router = express.Router();

router.get("*.js", controller.compressJS);
// router.get("/*", controller.endpoints);

module.exports = router;