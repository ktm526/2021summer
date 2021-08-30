const express = require('express');
const app = express();

app.listen(5000, function(){
    console.log('listening on 5000')
});

app.get('/', function(req, res){
    res.sendFile( __dirname + '/index.html' );
});

app.get('/vill', function(req, res){
    res.sendFile(__dirname + '/vill.html');
});