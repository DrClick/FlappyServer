var mongo = require('mongodb');
var mongoUri = "mongodb://admin:0okm9ijN@ds030607.mongolab.com:30607/flappybird"



exports.getTopScores = function(req, res) {
	//return the top 30 scores for now
	mongo.Db.connect(mongoUri, function (err, db) {
	 	var highScoresCollection = db.collection('highScores');
		
		var scores = highScoresCollection
			.find()
			.sort({score:-1})
			.limit(30)
			.toArray(function(err, items){
				console.log(items);
				res.send(items);
			});
	});//end connect
};//end method

exports.postScore = function(req, res){
	//console.log(req.body);
	var data = JSON.parse(req.body["data"]);
	mongo.Db.connect(mongoUri, function (err, db) {

		var highScoresCollection = db.collection('highScores');

		//check to see if score exists
		highScoresCollection.find({
			userId: data.id,
			score: data.score
		}).toArray(function(err, items){
			if(!items.length){
				highScoresCollection.insert(
		    	{
		    		"name": data.name, 
		    		"score" : data.score, 
		    		"date": Date.now(),
		    		"userId": data.id
		    	}, {safe: true}, function(er,rs) {});
			}//end if does not exist
		});//end to array
	});//end connection

	res.send("Nice Score!");
}


