let toggleButton = document.getElementsByClassName("burguerButton");
let checkbox = document.getElementById("menuCheck");

let buttonToggle = document.getElementById("buttonMenu");

console.log(buttonToggle);
if (buttonToggle != null) {
  buttonToggle.addEventListener("click", () => {
    console.log("first");
  });
}
if (checkbox != null) {
  checkbox.addEventListener("checked", () => {
    console.log("check");
  });
}

console.log(toggleButton);
console.log(toggleButton[0]);
console.log(checkbox);

console.log(toggleButton.checked);

// checkbox.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//   }
// });
// const toggleButton = document.getElementById(".menuCheck");

// toggleButton.addEventListener("click", () => {
//   console.log("first")
// });
