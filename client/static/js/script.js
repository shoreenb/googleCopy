const form = document.querySelector("form");
const search1 = document.querySelector("#searchOne");
const searchAll = document.querySelector("#searchAll");
const main = document.querySelector("resultsMain");

// form.addEventListener("submit", allSearch(e));

// function allSearch(e) {
//   e.preventDefault();
//   fetch("http://localhost:3000/results")
//     .then((resp) => resp.text)
//     .then((document.getElementById("text").textContent = result));
// }

search1.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/results.html";
});

function getAllResults() {
  fetch("http://localhost:3000/results")
    .then((r) => r.json())
    .then(appendCats)
    .catch(console.warn);
}
