var express = require('express');
var app = express();

// Fetch index file automatically
// app.use(express.static(__dirname + '/static'));

// Fetching particular file instead of index file in static folder

app.get('/', function(req,res){
    res.sendFile(__dirname + '/static/about.html');
});

app.use(express.static(__dirname + '/static'));


// app.get('/', function(req,res,next){
//     res.send('one');
//     next();
// }, function(req,res,next){
//    console.log("t20");
//    next();
// });

// app.get('/a', function(req,res){
//     res.send('two');
// });

app.listen(3000, function(err){
    if(err) throw err;
    console.log("Server is running");
});
