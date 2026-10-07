const myButton = document.querySelector("#my-button");
const clickCountP = document.querySelector("#click-count");

let count = 0;

function handleClick() {
    count++;
    clickCountP.innerText = 'The button has been clicked '+count+" times";
}

myButton.addEventListener("click", handleClick);
