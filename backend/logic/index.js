const {newLogger} = require("../utils/getLogger");

var logger = newLogger('logic');

async function logic() {
    logger.info("初始化后端逻辑...");

}

module.exports = logic;