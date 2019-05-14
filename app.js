const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient();
const uri = "mongodb+srv://AlejandroFlores:Alekar0104@segurapp-v32el.gcp.mongodb.net/test?retryWrites=true";
const DB_NAME = "segurapp"

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use('/api', require('./routes/api'));


var database, collection;

app.listen(3000, ()=>{
    MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) =>{
        if (err){
            throw err;
        }
        database = client.db(DB_NAME);
        collection = database.collection("usuarios")
        console.log('Conectado a ' + DB_NAME);
    });
});