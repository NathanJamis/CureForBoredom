$(document).ready(function () {
    // select html elements

    // add event listeners

    // run function when certain element is clicked

    // google maps API function

    // Get Data from NASA API and display in modal
    function getNASAData() {
        var NASAURL = "https://api.nasa.gov/planetary/apod?api_key=cTfEOxMXJxJDzjrpL2IhFf1wseJMQ660LAtJwmWy";
        $.ajax({
            url: NASAURL,
            method: "GET",
        }).then(function (response) {
            $(".NASAcontent").empty();
            console.log(response);

            var image = $("<img src =" + response.hdurl + ">");
            var explanation = $("<p>").text(response.explanation);
            $(".NASAcontent").append(image);
            $(".NASAcontent").append(explanation);
        })
    }

    //Show NASA modal when click NASA button
    $("#NASAbtn").click(function () {
        $(".NASAModal").addClass("is-active");
        getNASAData();
    });

    //Hide NASA modal when click Restart button
    $("#NASArestartBtn").click(function () {
        $(".NASAModal").removeClass("is-active");
    });


    // Kanye API function
    // 

    // attach button click event listener to Kanye function
    $(".kanyeBtn").click(function () {
        // creating modal to show quote
        $(".modal").addClass("is-active");
        kanyeQuotes();
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
            $(".quote").empty();
            $(".quote").append(response);
        });
    };


    // Joke API function
    // function Jokes() {
    //     var JokesUrl = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt`;
    //     $.ajax({
    //         url: JokesUrl,
    //         method: "GET"
    //     }).then(function (response) {
    //         return response.JSON();
    //     }).then(function (data) {
    //         console.log(data);
    //     });


    // }
    //     Jokes();

});