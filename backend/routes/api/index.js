var mission = require('./v1/mission');

var express = require('express');
var router = express.Router();

router.use("/v1", mission);

module.exports = router;