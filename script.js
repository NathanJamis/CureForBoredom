// select html elements

// add event listeners

// runfunction when certain element is clicked

// google maps API function

// NASA API function

// Kanye API function
function kanyeQuotes() {
    var kanyeUrl = `https://api.kanye.rest`;  
    
    $.ajax({
        url: kanyeUrl,
        method: "GET"
    }).then(function (response) {
        
    });
};

// Joke API function
function Jokes() {
    var JokesUrl = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt`;  
    $.ajax({
      url: JokesUrl,
      method: "GET"
    }).then(function (response) {
      return response.JSON();
  }).then(function (data) {
      console.log(data);
  })
  
  $("")
  };