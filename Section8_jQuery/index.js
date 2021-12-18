// Selecting all the h1 tags and changing there color to white
// $("h1").css("color","white");

// To get the property of the tag
console.log($("h1").css("font-size"));

// Add a 2 class(bigFont and marginSize) to tag
$("h1").addClass("bigFont marginSize");
// Removing a class
$("h1").removeClass("bigFont marginSize");
// Check if a class is present or not
console.log($("h1").hasClass("bigFont"));

// Changing the text of h1 tag
// $("h1").text("Vinayak");

// Changing the html of h1 tag
// $("h1").html("<em>Vinayak</em>");

// To get the attributes of image tag
console.log($("img").attr("src"));

// To set the attribute of anchor tag
$("a").attr("href", "https://in.search.yahoo.com/?fr2=inr");

// Get the class of a tag
console.log($("img").attr("class"))

// Adding event listener to buttons
$("button").click(function () {
    $("h1").css("color", "purple");
});

// Adding keypress Listner to our input tag and changing the textof h1 tag to the key pressed
$("input").keypress(function (event) {
    $("h1").text(event.key);
});

// Adding event listener in a better way
// The 1st parameter is the event that we want to detect and the seconf parameter is the function we want to perform
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

// Adding a button before h1
// $("h1").before("<button>Before Button</button>");

// Adding a button after h1
// $("h1").after("<button>After Button</button>")

// Prepending the button before h1 i.e adding button before h1 but in same line as h1
// $("h1").prepend("<button>Prepending Button</button>");

// Appending the button after h1 i.e adding button after h1 but in same line as h1
// $("h1").append("<button>Appending Button</button>");

// Removing all the buttons from the html
// $("button").remove();

// Adding animation to our h1 tag when we press a button
$("button").on("click", function () {
    // $("h1").fadeToggle();   When we press button for 1st time then h1 disappears for 2nd time it reapperars and so on.
    // $("h1").fadeOut();      When we press button, h1 tag is fades out once a button is pressed
    // $("h1").fadeIn();       When we press button, h1 tag comes back if it was not present

    // Adding a custom animation to our h1 tag whenever we press a button
    // $("h1").animate({ opacity:"0.5" })   Changing the opacity of h1 tag to 0.5 timesoriginal one

    // Adding multiple effects on h1 tag when we press a button
    $("h1").slideUp().slideDown().animate({
        opacity: "0.5"
    });
});