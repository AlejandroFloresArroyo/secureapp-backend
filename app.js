const Express = require("express");
const BodyParser = require("body-parser");
const Mongoose = require("mongoose")
const uri = "mongodb+srv://AlejandroFlores:Alekar0104@segurapp-v32el.gcp.mongodb.net/test?retryWrites=true";

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use('/api', require('./routes/api'));
app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message})
})

Mongoose.connect(uri, {useNewUrlParser: true});
Mongoose.Promise = global.Promise;

app.listen((process.env.PORT || 3000), ()=>{
    console.log('ready')
});