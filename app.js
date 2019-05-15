const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient();
const Mongoose = require("mongoose")
const uri = "mongodb+srv://AlejandroFlores:Alekar0104@segurapp-v32el.gcp.mongodb.net/test?retryWrites=true";
const DB_NAME = "segurapp"

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use('/api', require('./routes/api'));

Mongoose.connect(uri, {useNewUrlParser: true});
Mongoose.Promise = global.Promise;


app.listen(3000, ()=>{
    console.log('ready')
});