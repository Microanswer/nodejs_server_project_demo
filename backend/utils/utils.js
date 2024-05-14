var util = {

    /**
     * 如果 val 为空，那么抛出 msg 指定的错误信息。
     * @param val {string}
     * @param msg {string}
     *
     * @throws {Error<string>}
     */
    emptyThrow(val, msg) {
        if (util.isEmpty(val)) {
            throw new Error(msg);
        }
    },

    /**
     * 判断值是否为空。
     * @param value
     * @return {boolean}
     */
    isEmpty(value) {
        if (null === value) return true;
        if (typeof value === "undefined") return true;
        if (Array.isArray(value) && value.length === 0) return true;
        return typeof value === "string" && value.length === 0;
    },
}


module.exports = util;