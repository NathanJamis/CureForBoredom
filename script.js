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
    // attach button click event listener to Kanye function
    $(".kanyeBtn").click(function () {
        // creating modal to show quote
        $(".kanyeModal").addClass("is-active");
        kanyeQuotes();
    });
    $(".modal-close").click(function () {
        $(".kanyeModal").removeClass("is-active");
    });
    $("#restartBtn").click(function () {
        $(".kanyeModal").removeClass("is-active");
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
    //Panorama API
    //Click to open Panorama Modal
    $("#travel").click(
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
            panorama = new google.maps.StreetViewPanorama(
            document.getElementById("streetviewPanorama"),
            {
                position:randomPlace,
                pov: { heading: 0, pitch: 0 },
                zoom: 1,
            },
            )
        }
    )
    //Click to close Panorama Modal 
    $("#panoramarestartBtn").click(function () {
        $(".panoramaModal").removeClass("is-active");
    });
});