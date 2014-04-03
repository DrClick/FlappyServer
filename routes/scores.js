var mongo = require('mongodb');
var mongoUri = "mongodb://admin:0okm9ijN@ds030607.mongolab.com:30607/flappybird"



exports.getTopScores = function(req, res) {
	mongo.Db.connect(mongoUri, function (err, db) {
	  db.collection('highScores', function(er, collection) {
	    //get the records
	  });
	});
    res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.postScore = function(data){
	mongo.Db.connect(mongoUri, function (err, db) {
	  db.collection('highScores', function(er, collection) {
	    collection.insert(
	    	{
	    		"name": "Tom Watson", 
	    		"score" : 234, 
	    		"date": Date.now() 
	    	}, {safe: true}, function(er,rs) {});
	  });
	});
}