let container = document.getElementById("container");

let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      container.style.backgroundColor = e.target.id;
    }
  });
});
