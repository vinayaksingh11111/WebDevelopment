var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
// Getting a random number from 1-6

// Getting the dice image name
var dice1 = "images/dice" + randomNumber1 + ".png";
console.log(dice1);
// Setting the image of class .img1 to dice1
document.querySelector(".img1").setAttribute("src", dice1);


// Same thing as above for image with class .img2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);

var dice2 = "images/dice" + randomNumber2 + ".png";
console.log(dice2);
document.querySelector(".img2").setAttribute("src", dice2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}