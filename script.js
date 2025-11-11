let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    alert("Hello, World! <3");
})

// 
btn.addEventListener("click", function (e) {
    console.log(e);
});


btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
