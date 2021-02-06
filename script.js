// global variable for user name
var userInput = [];

// push user input into userInput array
function pushInput() {
    var userName = $("#userName").val();
    userInput.push(userName);
    storeUser();
    getUser();
};

// store username in local storage
function storeUser() {
    localStorage.setItem('userInput', JSON.stringify(userInput));  
};

// get username from local storage
function getUser() {
    var storedUser = JSON.parse(localStorage.getItem("userInput"));
    if (storedUser !== null) {
        userInput = storedUser;
    }  
};
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