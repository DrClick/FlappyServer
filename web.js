// web.js
var express = require("express");
var logfmt = require("logfmt");
var scores = require("./routes/scores");

var app = express();

//console.log("start");
app.configure(function () {
    app.use(logfmt.requestLogger());
    app.use(express.bodyParser());
    app.use(_allowCrossDomain);
});
//console.log("configured");


//define API
app.get('/', function(req, res) {
  res.send('<h1>Famous Bird by Thomas Watson</h1><h2><a href="//demo.famo.us/flappy-bird">Visit demo.famo.us/flappy-bird</a> to play</h2>');
});

app.get("/scores", scores.getTopScores);
app.post("/scores", scores.postScore);


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  //console.log("Listening on " + port);
});

function _allowCrossDomain(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
 
	next();
}





