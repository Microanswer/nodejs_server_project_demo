const {configure, Format, getLogger, connectLogger} = require('log4js');

configure({
    pm2: true,
    disableClustering: true,
    appenders: {
        console: {type: 'console'},
        everydayfile: {
            type: 'dateFile',
            filename: `logs/server.log`,
            compress: true,
            keepFileExt: true
        }
    },
    categories: {
        default: {
            appenders: ["console", "everydayfile"],
            level: "info"
        }
    }
})

module.exports = {
    newLogger(name) {
        return getLogger(name);
    },

    /**
     * 创建用于Express中间件的日志记录器
     * @param name {string}
     * @param option {
     *     {
     *     format?: Format;
     *     level?: string;
     *     nolog?: any;
     *     statusRules?: any[];
     *     context?: boolean;
     *   }
     * }
     * @return {any}
     */
    createExpressLogMiddeware(name, option) {
        return connectLogger(getLogger(name), option);
    }
}