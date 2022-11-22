const resultsDiv = document.querySelector("#results");
const form = document.querySelector("form");
const url = "https://itunes.apple.com/search?term=";
let searchTerm;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   put in the search input
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
        let card = document.createElement("div");
        card.classList.add("card", "tile", "is-3");
        // card.classList.add("tile");
        let image = document.createElement("img");
        let figure = document.createElement("figure");
        figure.classList.add("image", "is-4by3");
        figure.appendChild(image);
        image.src = song.artworkUrl100;
        card.appendChild(image);
        let title = document.createElement("div");
        title.classList.add("title", "is-4");
        title.innerText = song.trackName;
        card.appendChild(title);
        results.appendChild(card);
      }
    });
});
