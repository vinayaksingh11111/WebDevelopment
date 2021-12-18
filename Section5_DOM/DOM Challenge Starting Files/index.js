// document.getElementsByTagName("body");
document.querySelector(".list a").style.color = "blue";
// Returns the first element that has tag === a and has parent class .list, if multiple class have same condition then 1st one is given
document.getElementsByTagName("body");
// Returns array of element that has tag === body
document.getElementsByClassName(".list");
// Returns array of element with the class === .list
document.firstElementChild;
// Returns the first element of the html
document.lastElementChild;
// Returns the last element of the html


document.querySelector("button").style.backgroundColor = "yellow";

console.log(document.querySelector("button").classList);
// Gives us the list of class that is associated to querySelector

// document.querySelector("button").classList.add("invisible");

// Adds a class name invisible to the querySelector and now after this the css property of .invisible will also be applied to button tag

// document.querySelector("button").classList.remove("invisible");

// Remove class invisible from the querySelector

// document.querySelector("button").classList.toggle("invisible");

// Adds the class if it is not present else removes it

console.log(document.querySelector("h1").innerHTML);
// This gives us the content that is enclosed within the h1 tag even other tag like strong or em

console.log(document.querySelector("h1").textContent);
// This gives us only the text part inside the h1 tag and removes all other tags inside the h1

document.querySelector("h1").innerHTML = "<em>Good Bye</em>";
// Set the content of h1 to this

console.log(document.querySelector("a").attributes);
// Attributes here means the href,class,src

console.log(document.querySelector("a").getAttribute("href"));
// Returns the href content of the a tag

document.querySelector("a").setAttribute("href", "https://classroom.google.com/u/1/h");