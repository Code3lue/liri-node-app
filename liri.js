var liri = require('./keys.js');

//console.log(liri.twitterKeys.consumer_key);

var obj = liri.twitterKeys;

var input = process.argv[2];
var song = process.argv[3];

switch (input) {
  case "my-tweets":
    getTweets();
    break;

  case "spotify-this-song":
    spotifyThis();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doThis();
    break;
}

//console.log(client);

//console.log(input);

function getTweets() {

var Twitter = require('twitter');

var client = new Twitter(obj)

//console.log(client);

 var params = {screen_name: 'Code3lue', count: 10};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error && response.statusCode === 200) {
    for (var i = 0; i < tweets.length; i++) {
        console.log((i+1)+') '+tweets[i].created_at+':\n'+'"'+tweets[i].text+'"');
    }
  }
  else {
      throw error
  }
});

}

if (input === 'spotify-this-song' && 



