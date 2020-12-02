// "start": "node server.js"
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const https = require('https');
var cytoscape = require('cytoscape');
let edgehandles = require('cytoscape-edgehandles');

cytoscape.use( edgehandles ); // register extension

var port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost5000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname));


app.listen(port);
console.log("Listening on port ", port);