var api = require('./api/index');

module.exports = {

    /**
     *
     * @param app {Express}
     */
    apply (app) {
        app.use("/api", api);
    }
}