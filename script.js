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
        return response.JSON();
    }).then(function (data) {
        console.log(data);
    })
    
    $("")
};

// Joke API function