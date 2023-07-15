const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.getElementById("result");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give valid values";
  }
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give valid values";
  } else {
    results.innerHTML = `<h1>${bmi}</h1`;
  }
});
