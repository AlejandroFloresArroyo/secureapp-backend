const Express = require("express");
const Router = Express.Router();
const User = require("../models/users");


Router.get("/users", (req, res) =>{
    res.send({type: 'GET'});
});


Router.post("/users", (req, res) =>{
    User.create(req.body).then((user) =>{
        res.send(user);
    });
});


Router.put("/users/:id", (req, res) =>{
    res.send({type: 'PUT'});
});


Router.delete("/users/:id", (req, res) =>{
    res.send({type: 'DELETE'});
});

module.exports = Router;