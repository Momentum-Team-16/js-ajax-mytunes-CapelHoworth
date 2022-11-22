const resultsDiv = document.querySelector("#results");
const form = document.querySelector("form");
const url = "https://itunes.apple.com/search?term=";
let searchTerm;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   tag on the search input
  searchTerm = url + form.querySelector("#key").value + "/";
  console.log("submitted");
  fetch(searchTerm, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let song of data.results) {
        console.log(`This is what we got from the API: ${song.trackName}`);
      }
    });
});
