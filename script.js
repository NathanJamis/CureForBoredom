// Click handler for localStorage and page redirect
$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var userName = $("#userName").val();
    localStorage.setItem("user", JSON.stringify(userName));
    document.location.href = "index2.html"
});
// Retrieve user name from localStorage and display in hero
var getUser = JSON.parse(localStorage.getItem("user"));
var welcomeBanner = $("<p>").addClass("title").text("Welcome, " + getUser);
$("#userName").append(welcomeBanner)


// API functions
$(document).ready(function () {
    //Kanye API
    //Show Kanye modal when Kanye button is clicked
    $(".kanyeBtn").click(function () {
        $("#KanyeModal").addClass("is-active");
        kanyeQuotes();
    });
    //Hide Kanye modal when restart button is clicked
    $("#KanyeRestartBtn").click(function () {
        $("#KanyeModal").removeClass("is-active");
    });
    //Get data from Kanye API and display in modal
    function kanyeQuotes() {
        var kanyeUrl = `https://api.kanye.rest?format=text`;

        $.ajax({
            url: kanyeUrl,
            method: "GET",
            dataType: "text",
        }).then(function (response) {
            console.log(response);
            $("#KanyeQuote").empty();
            $("#KanyeQuote").append(response);
        });
    };

    //NASA API
    //Get data from NASA API and display in modal
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
        $("#NASAModal").addClass("is-active");
        getNASAData();
    });

    //Hide NASA modal when click Restart button
    $("#NASArestartBtn").click(function () {
        $("#NASAModal").removeClass("is-active");
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