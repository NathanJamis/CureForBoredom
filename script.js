$(document).ready(function () {
    // select html elements

    // add event listeners

    // run function when certain element is clicked

    // google maps API function

    // Get Data from NASA API
    function getNASAData ()  {
        var NASAURL = "https://api.nasa.gov/planetary/apod?api_key=cTfEOxMXJxJDzjrpL2IhFf1wseJMQ660LAtJwmWy";
        $.ajax ({
            url:NASAURL,
            method: "GET",
        }).then(function (response) { 
            console.log(response);
            showNASA(response);
        })
    }
    $("#NASAbtn").click(function () {
        getNASAData();

    })



    // Kanye API function
    // 

    // attach button click event listener to Kanye function
    $(".kanyeBtn").click(function () {
        // show quote
        // let createADiv = document.createElement("div");
        // creating modal to show quote
        $(".modal").addClass("is-active");
    });
    $(".modal-close").click(function () {
        $(".modal").removeClass("is-active");
    });
    $("#restartBtn").click(function () {
        $(".modal").removeClass("is-active");
    });
    function kanyeQuotes() {
        var kanyeUrl = `https://api.kanye.rest?format=text`;

        $.ajax({
            url: kanyeUrl,
            method: "GET",
            dataType: "text",
            // success: function (data) {
            //     // if (condition) {

            //     // }  
            // };
        }).then(function (response) {
            console.log(response);

        });
    };
    kanyeQuotes();


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

    };
    Jokes();

});