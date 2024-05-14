const {newLogger} = require("../utils/getLogger");

var logger = newLogger('db');

async function db() {
    logger.info("初始化数据库...");

}

module.exports = db;