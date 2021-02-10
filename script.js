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
    //Show joke modal when click Joke button
     $("#jokeBtn").click(function () {
        $("#jokeModal").addClass("is-active");
        //gathers data and displays joke
        jokes();
    });
    //Hide joke modal when click restart button
    $("#jokeRestartBtn").click(function () {
        $("#jokeModal").removeClass("is-active");
    });
    //Gather data and display joke
    function jokes() {
        var jokeUrl = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt`;

        $.ajax({
            url: jokeUrl,
            method: "GET",
            dataType: "text",
        }).then(function (response) {
            console.log(response);
            $("#joke").empty();
            $("#joke").append(response);
        });
    };
    
    //Panorama API
    function initialize() {
        var Venice = { lat: 45.4759903, lng: 12.5915585 }
        var Seychelles = { lat: -4.3325215, lng: 55.7870521 }
        var Boudha = { lat: 27.721378, lng: 85.3619399 }
        var Seoraksan = { lat: 38.0803894, lng: 128.4360266 }
        var Mahakai = { lat: 27.0477084, lng: 88.2678402 }
        var Baikal = { lat: 53.3255194, lng: 107.7484936 }
        var Tbilisi = { lat: 41.6870833, lng: 44.808745 }
        var Baalbek = { lat: 34.0045188, lng: 36.2030793 }
        var Polonnaruwa = { lat: 7.9473986, lng: 81.0013532 }
        var locations = [Venice, Seychelles, Boudha, Seoraksan, Mahakai, 
            Baikal, Tbilisi, Baalbek, Polonnaruwa]
        randomPlace = locations[Math.floor(Math.random() * locations.length)]
        new google.maps.StreetViewPanorama(
        document.getElementById("streetviewPanorama"),
        {
            position:randomPlace,
            pov: { heading: 0, pitch: 0 },
            zoom: 1,
        },
        )
        console.log(locations)
        console.log(randomPlace)
    }
    //Click to open Panorama Modal
    $("#travel").click(function () {
        $(".panoramaModal").addClass("is-active"),
        initialize ()
    });
    //Click to close Panorama Modal 
    $("#panoramarestartBtn").click(function () {
        $(".panoramaModal").removeClass("is-active"),
        document.getElementById("streetviewPanorama").innerHTML = "";
    });

});

function footerQuotes() {
    var quotes = [
        "There are no uninteresting things, only uninterested people. ― G.K. Chesterton",
        "Is life not a thousand times too short for us to bore ourselves? ― Friedrich Nietzsche",
        "The cure for boredom is curiosity. There is no cure for curiosity. – Ellen Parr",
        "The two enemies of human happiness are pain and boredom. – Arthur Schopenhauer",
        "Without freedom of choice there is no creativity. - Captain James T. Kirk"
    ];
    $("#footQuote").text(quotes[Math.floor(Math.random() * quotes.length)]);
};
footerQuotes();