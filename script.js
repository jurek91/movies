const myList = document.getElementById("myList");
const searchMovies = (keyword) => {
  const UrlAPI = `https://www.omdbapi.com/?s=${keyword}&apikey=aa4efab8`;
  fetch(UrlAPI)
    .then((response) => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const movieListing = `<li>
        <img src="${movie.Poster}"/>
        <p>${movie.Title}</p>
        </li>`;
        myList.insertAdjacentHTML("beforeend", movieListing);
      });
    });
};
const searchForm = document.getElementById("search-movies");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  myList.innerHTML = "";
  const keywordInput = document.querySelector("#keyword").value;
  searchMovies(keywordInput);
});

searchMovies("Tarzan");
