const keys = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "Shift",
  "Control",
  "Alt",
  "Meta",
  " ",
  "Meta",
  "Alt",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
];

const keyClick = document.querySelector("#key");
let currentKeyIndex = 0;
keyClick.textContent = keys[currentKeyIndex];
const numberRef = document.querySelector(".span");
numberRef.textContent = 0;

function keyApp() {
  window.addEventListener("keydown", (e) => {
      if (e.key.toLocaleLowerCase() === keys[currentKeyIndex].toLocaleLowerCase()) {
        currentKeyIndex++;
        numberRef.textContent++;

        if (keys.length !== currentKeyIndex) {
          keyClick.textContent = keys[currentKeyIndex];
        } else return;
      } else {
        console.log("name true key");
      }
  });
} 





keyApp()