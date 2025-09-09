let searchForm = document.querySelector("form");
let movieContainer = document.querySelector(".movie-container");
let inputBox = document.querySelector(".inputBox");

//fetching the api

const getMovieInfo = async (movieName) => {
  let myAPIKey = "8e6354eb";
  let url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movieName}`;
  let response = await fetch(url);

  let data = await response.json();

  // Check if the API returned "Response": "False"
  if (data.Response === "False") {
    movieContainer.innerHTML = `<h2>Movie Not Found!!</h2>`;
  } else {
    showMovieData(data); // Display movie details if found
  }
};

//Getting the movie details

let showMovieData = (data) => {
  movieContainer.innerHTML = "";
  const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } =
    data;
  let movieElement = document.createElement("div");
  movieElement.innerHTML = `<img src="${Poster}" alt="Poster">
                            <h2>${Title}</h2>
                            <p><strong>Rating : </strong>${imdbRating}</p>
                            <p><strong>Genre : </strong>${Genre}</p>
                            <p><strong>Released : </strong>${Released}</p>
                            <p><strong>Runtime : </strong>${Runtime}</p>
                            <p><strong>Actors : </strong>${Actors}</p>
                            <p><strong>Plot : </strong>${Plot}</p>`;
  movieContainer.appendChild(movieElement);
};

//searching the movie details click on submite
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = inputBox.value.trim();
  if (movieName !== "") {
    getMovieInfo(movieName);
  } else {
    movieContainer.innerHTML = `<h2>Enter the Movie Name!</h2>`;
  }
});
