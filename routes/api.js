const Express = require("express");
const Router = Express.Router();
const User = require("../models/users");


Router.get("/users", (req, res, next) =>{
    if (req.query.lng != null && req.query.lat != null){
    User.aggregate().near({
        near : {
            type: "Point",
            coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 10000000,
        spherical: true,
        distanceField: "dis"
    }).then((users) => {
        res.send(users);
    }).catch(next);
    }else{
        User.find().then((user) => {
            res.send(user);
        }).catch(next);
    }
});


Router.post("/users", (req, res, next) =>{
    User.create(req.body).then((user) =>{
        res.send(user);
    }).catch(next);
});


Router.put("/users/:id", (req, res, next) =>{
    User.updateOne({facebookId: req.params.id}, req.body).then(()=>{
        User.findOne({facebookId: req.params.id}).then((user) =>{
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