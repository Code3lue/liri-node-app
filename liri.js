var liri = require('./keys.js');

//console.log(liri.twitterKeys.consumer_key);

var obj = liri.twitterKeys;

var input = process.argv[2];
var input2 = process.argv[3];

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
function spotifyThis() {
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: input2 }, function(err, data) {
 
   if (err) {
       console.log(err);
       return;
   }

   else {
       for (var i = 0; i < data.tracks.items.length; i++) {
            console.log('\n------------------------\n') 
           console.log(data.tracks.items[i].artists[0].name);
                console.log(data.tracks.items[i].name);
                console.log(data.tracks.items[i].preview_url);
                console.log(data.tracks.items[i].album.name);
                 console.log('\n------------------------\n') 
       }
   }
});
}

//movie-this
function movieThis() {

    if (input === 'movie-this' && input2 !== undefined) {

    var request = require('request');
    var movie =  input2.split(" ").join("+");
    // console.log(movie)
    var queryUrl = "http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&r=json";
    //console.log(queryUrl)


    request( queryUrl , function(error, response, body){

        if (!error && response.statusCode === 200){
            console.log('\n------------------------\n') 
            console.log(JSON.parse(body).Title);   
            console.log(JSON.parse(body).Year);
            console.log(JSON.parse(body).Country);
            console.log(JSON.parse(body).Language);
            console.log(JSON.parse(body).Plot);
            console.log(JSON.parse(body).Actors);
            console.log(JSON.parse(body).Rating);
            console.log(JSON.parse(body).imdbRating);
            console.log('\n------------------------\n') 
        }

        else {
            console.log("Mr.Nobody\n");
            console.log("2009\n");
            console.log('Belgium, Germany, Canada, France\n');
            console.log("English, Mohawk\n");
            console.log("A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities\
arise from this decision. As long as he doesn\'t choose, anything is possible.\n");
            console.log('undefined\n');
            console.log("7.9\n")

        }
    });
}

function doThis() {
    fs.readFile("./random.txt", "utf8", function(err, data) {
   console.log(data);
});
}

/*
    spotify.search({type:'track', query: res[1]} , function(err,data){
      if(err){
          console.log(err);
          return;
      }
            for (var i = 0; i < data.tracks.items.length;i++ ){
                console.log('\n-----------------------\n')
                console.log(data.tracks.items[i].artists[0].name);
                console.log(data.tracks.items[i].name);
                console.log(data.tracks.items[i].preview_url);
                console.log(data.tracks.items[i].album.name);
                console.log('\n-----------------------\n')
            }     
    });
    */