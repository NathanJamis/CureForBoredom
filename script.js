// store username in local storage

// user input field
$("#userName").on("click", function (event) {
    event.preventDefault();
    var userName = $("#userName").val();
    localStorage.setItem("user", JSON.stringify(userName));   

});
    var getUser = JSON.parse(localStorage.getItem("user"));
    var welcomeBanner = $("<p>").addClass("title").text("Welcome, " + getUser);
    $("#userName").append(welcomeBanner)
    

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
});

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