// Higher Order Function

/*
    function add(a, b){
    return a+b;
    }

    function multiply(a, b){
        return a*b;
    }
    
    This function accepts an operator that is a function it will perform when it is called

    function calculator(a,b,operator){
        return operator(a,b);
    }

    console.log(calculator(2,3,add));
    console.log(calculator(2,3,multiply));
*/

/*
    OBJECT ORIENTED PROGRAMMING

    DECLARING A CONSTRUCTOR

    function HouseKeeper(name,age,email,preferredType){
    this.name=name;
    this.age=age;
    this.email=email;
    this.preferredType=preferredType;
    }

    DECLARING AN OBJECT

    var housekeeper1=new HouseKeeper("Xyz",21,"Xyx@gmail.com","rooms");
    console.log(housekeeper1.name);
    console.log(housekeeper1.age);
    console.log(housekeeper1.email);
    console.log(housekeeper1.preferredType);

*/


var button = document.querySelectorAll(".drum");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });
    // We are calling the function handleClick and not handleClick() because in the latter way the function would be called without waiting for us to click on the button but in former case it will wait for an event i.e click on button and then it will call the function handleClick

}

document.addEventListener("keypress", function (event) {
    // When a event occurs that trigers the event listener we can tap into the details of the event by passing the event into the function parameter

    makeSound(event.key);
    addAnimation(event.key);
});
// Checking for key pressed once pressed the keyPressed function is called, we pass the event i.e pressing key  into the function to get the information about what key was pressed

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function addAnimation(key) {
    var keyPressed = document.querySelector("." + key);
    keyPressed.classList.add("pressed");
    // Adding a class pressed to the key so that we can higlight the key we pressed

    setTimeout(function () {
        keyPressed.classList.remove("pressed");
        // This is a better way to call the function instead of writing name of the function and then defining it else where
        // since for keyPressed variable we can directly access it, but if we have no such contraint then we can stick to the normal way
    }, 100);
}