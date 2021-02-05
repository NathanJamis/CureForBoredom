// select html elements

// add event listeners

// run function when certain element is clicked

// google maps API function

// NASA API function

// Kanye API function
function kanyeQuotes() {
    var kanyeUrl = `https://api.kanye.rest?format=text`;  
    
    $.ajax({
        url: kanyeUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });
};

kanyeQuotes();

// Joke API function