const Express = require("express");
const Router = Express.Router();

Router.get("/users", (req, res) =>{
    res.send({type: 'GET'});
});

Router.post("/users", (req, res) =>{
    console.log(req.body);  
    res.send({
        facebookId: req.body.facebookId,
        active: req.body.active,
        location: req.body.location
});
});

Router.put("/users/:id", (req, res) =>{
    res.send({type: 'PUT'});
});

Router.delete("/users/:id", (req, res) =>{
    res.send({type: 'DELETE'});
});

module.exports = Router;