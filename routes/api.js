const Express = require("express");
const Router = Express.Router();
const User = require("../models/users");


Router.get("/users", (req, res, next) =>{
});


Router.post("/users", (req, res, next) =>{
    User.create(req.body).then((user) =>{
        res.send(user);
    }).catch(next);
});


Router.put("/users/:id", (req, res, next) =>{
    User.updateOne({_id: req.params.id}, req.body).then(()=>{
        User.findOne({_id: req.params.id}).then((user) =>{
            res.send(user);
        })
    }).catch(next);
});


Router.delete("/users/:id", (req, res, next) =>{
    User.deleteOne({facebookId: req.params.id}).then((user)=>{
        res.send(user);
    }).catch(next);
});

module.exports = Router;