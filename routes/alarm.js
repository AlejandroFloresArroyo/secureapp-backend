const Express = require("express");
const Router = Express.Router();
const User = require("../models/users");

Router.get("/throw", (req, res, next) => {
    res.send("alarma");
});

module.exports = Router;