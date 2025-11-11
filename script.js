let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    alert("Hello, World! <3");
})

// logging the event
btn.addEventListener("click", function (e) {
    console.log(e);
});

// logging the event target
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
// changing the target's background colour
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
    });
});