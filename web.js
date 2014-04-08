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
app.get("/scores", scores.getTopScores);
app.post("/scores", scores.postScore);

//serve static files if a route is not defined
app.use('/', express.static(__dirname + '/game'));


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





