// 1. Store elements we will use as variables

const lightMode = document.querySelector("#light-mode");
const darkMode = document.querySelector("#dark-mode");
const body = document.querySelector("body");
const button = document.querySelectorAll("button");
document.querySelectorAll

// 2. Print them out to make sure it's right

console.log(lightMode);
console.log(darkMode);
console.log(body);

// 3. Create Light/Dark mode functionality for webpage

lightMode.addEventListener("click", function () {

  console.log("Switched to light mode");
  body.style.backgroundColor = "#FFDBBB"
  button.style.backgroundColor = "#A54800"
  button.style.fontColor = "#A54800"

});

darkMode.addEventListener("click", function () {
  console.log("Switched to dark mode")
  body.style.backgroundColor = "#A54800"
  button.style.backgroundColor = "#FFDBBB"
  button.style.fontColor = "#FFDBBB"

});

// Bonus objectives (Optional):
// Changing font color
// Changing border color or style
// Changing the background colors
// Adding background images
// Changing button colors