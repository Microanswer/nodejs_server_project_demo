var express = require('express');
const {newLogger} = require("../../../utils/getLogger");
const util = require("../../../utils/utils");
var router = express.Router();
var logger = newLogger('logger');

/**
 * 获取任务详情
 */
router.get('/mission/:taskId', async function (req, res) {
    util.emptyThrow(req.params.taskId, "任务id为空");


    res.json({no: 0, data: req.params.taskId});
});

/**
 * 执行任务
 */
router.get('/mission/run', function(req, res) {
    res.json({no: 0, data: "run"});
});

module.exports = router;