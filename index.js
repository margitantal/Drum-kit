// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked");
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked");

        // amikor az egérrel nyomjuk
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

// Amikor a billentyűzetet nyomjuk
document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("https://margitantal.github.io/Drum-kit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("https://margitantal.github.io/Drum-kit/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("https://margitantal.github.io/Drum-kit/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("https://margitantal.github.io/Drum-kit/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("https://margitantal.github.io/Drum-kit/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("https://margitantal.github.io/Drum-kit/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("https://margitantal.github.io/Drum-kit/sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);

    }
}


function buttonAnimation(currentKey) {

    // hozzá kell adni a pontot is a betűhöz, mivel classt akarunk hívni
    var activeButton = document.querySelector("." + currentKey);
    // hozzá kell adni a fenti változóhoz w k l éppen amit lenyomnak a .pressed class-t css-ből

    activeButton.classList.add("pressed");
    // beállítjuk h eltűnjön x másodperc múlva a class így lesz belőle animáció
    setTimeout(function () {
        activeButton.classList.remove("pressed");
        // második paraméter lent ---> 0,1 másodperc
    }, 100);
}

