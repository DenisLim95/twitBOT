console.log('The bot is starting');

// This is like importing  library/package
var Twit = require('twit');

// Made separate file called config.js to store keys, then import
var config = require('./config');

// Create Twit Object
var T = new Twit(config);

// Specify parameters
var params = {
	q: 'nexus earth',
	count: 10
}

// Call the get method. 
// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
// 	var tweets = data.statuses;
// 	for (var i = 0; i < tweets.length; i++) {
// 		console.log(tweets[i].text);
// 	}
// };

T.get('users/show/elonmusk', { slug: 'funny' }, function (err, data, response) {
  // var elonTweets = data.status;
  console.log(data.status.text);
})



// var stream = T.stream('user');

// stream.on('tweet', tweetEvent);

// function tweetEvent(eventMsg) {
// 	var fs = require('fs');


// }


// Responding to tweets
// Retweet Elon Musk, and say everything he says is genius.
// ex: "What a genius: RT-'Elon: CO2 is bad for the environment' ""









// Tweet something
// tweetIt('make tweets great again');

// POST function
function tweetIt(message) {
	var tweet = {
	status: message
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log("An error occured!");
		} else {
			console.log("it worked!");	
		}
	}
}







