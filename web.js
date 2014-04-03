// web.js
var express = require("express");
var logfmt = require("logfmt");
var scores = require("./routes/scores");

var app = express();


app.configure(function () {
    app.use(logfmt.requestLogger());
    app.use(express.bodyParser());
});


//define API
app.get('/', function(req, res) {
  res.send('Hello Flappy World!');
});

app.get("/scores", scores.getTopScores);
app.post("/scores" scores.postScore);


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});



