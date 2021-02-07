// store username in local storage
// user input field
$("#userName").on("click", function (event) {
    event.preventDefault();
    var userName = $("#userName").val();
    localStorage.setItem("user", JSON.stringify(userName));   
});

    var getUser = JSON.parse(localStorage.getItem("user"));
    var welcomeBanner = $("<p>").addClass("title").text("Welcome, " + getUser);
    $("#userName").append(welcomeBanner);

getUser();
// user input field
$("#userName").on("submit", function (event) {
    event.preventDefault();
    userInput();
    $("#userName").val("");
});

// API function
$(document).ready(function () {
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
        }).then(function (response) {
            console.log(response);
            $(".quote").empty();
            $(".quote").append(response);
        });
    };

    //NASA API
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

    //Joke API function
    function Jokes() {
        var JokesUrl = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt`;
        $.ajax({
            url: JokesUrl,
            method: "GET"
        }).then(function (response) {
            return response.JSON();
        }).then(function (data) {
            console.log(data);
        });


    }
    Jokes();

});