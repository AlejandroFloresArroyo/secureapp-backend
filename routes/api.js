const Express = require("express");
const Router = Express.Router();
const User = require("../models/users");


Router.get("/users", (req, res, next) =>{
    res.send({type: 'GET'});
});


Router.post("/users", (req, res, next) =>{
    User.create(req.body).then((user) =>{
        res.send(user);
    }).catch(next);
});


Router.put("/users/:id", (req, res, next) =>{
    res.send({type: 'PUT'});
});


Router.delete("/users/:id", (req, res, next) =>{
    res.send({type: 'DELETE'});
});

module.exports = Router;