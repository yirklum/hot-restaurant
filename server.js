var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//create array variables that will hold the data
var personData = [{
    name:  "", 
    phone: "",
    email: "",
    uniqueId: ""
}, {
    name:  "", 
    phone: "",
    email: "",
    uniqueId: ""
}];

//create a set of routes for getting and posting table data

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "./tables.html"));
})

app.get("./reservations.html", function(req, res){
    res.sendFile(path.join(__dirname, "./reservations.html"));
})
//create a set of routes for displaying the HTML pages

//create new person/reservation
app.post("/tables", function(req, res){
    var newperson = req.body;
    console.log(newperson);
    personData.push(newperson);
    res.json(newperson);
});
//use jQuert to run AJAz calls to GET and POST data from users to the Express server

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});