// DATA from OC MOVIE

urlTitle = "http://localhost:8000/api/v1/titles/";
url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
url1 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";

urlAction =
  "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score";
urlAction2 =
  "http://localhost:8000/api/v1/titles/?genre=Action&page=2&sort_by=-imdb_score";
urlSciFi =
  "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score";
urlSciFi =
  "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score";
urlThriller =
  "http://localhost:8000/api/v1/titles/?genre=Thriller&sort_by=-imdb_score";
urlThriller2 =
  "http://localhost:8000/api/v1/titles/?genre=Thriller&page=2&sort_by=-imdb_score";
urlFamily =
  "http://localhost:8000/api/v1/titles/?genre=Family&sort_by=-imdb_score";
urlFamily2 =
  "http://localhost:8000/api/v1/titles/?genre=Family&sort_by=-imdb_score";

// urlBestGenre =
//   "http://localhost:8000/api/v1/titles/?genre=" +
//   genre +
//   "&sort_by=-imdb_score";

//var carousel__BestM = document.getElementById("carousel__data");

// ******************  HERO AND BEST MOVIES  ***************************

// BEST MOVIES

getRatedMovie();

async function getRatedMovie() {
  Promise.all([await fetch(url), await fetch(url1)])
    .then(function (res) {
      return Promise.all(
        res.map(function (res) {
          return res.json();
        })
      );
    })
    .then(function (data1) {
      console.log(data1);
      const BestMovies = data1[0].results.concat(data1[1].results);
      const BestMovie = BestMovies[0];
      console.log(BestMovies);
      console.log(BestMovie.id);
      // BEST MOVIE
      document.getElementById("h1").innerText = BestMovie.title;
      document.getElementById("best_title__modal").innerText = BestMovie.title;
      document.getElementById("home").url = BestMovie.image_url;
      document.querySelector(".hero_picture-movie").src = BestMovie.image_url;
      document.querySelector(".best_picture-modal").src = BestMovie.image_url;

      // BEST MOVIES CAROUSEL
      var carousel__BestM = document.getElementById("content");

      BestMovies.slice(0, 7).map(function (movie, index) {
        carousel__BestM.insertAdjacentHTML(
          "beforeend",
          `<div class="item_box">
            <button id="BmoviesModal" onclick="getInfoG(${movie.id})">
             <img  src="${movie.image_url}" alt=${movie.title} />
             </button>
             <h3>${movie.title}</h3>
             <div>
            `
        );
      }).catch = (error) => {
        console.log(error);
      };
    });

  //HERO BEST MOVIE

  fetch("http://localhost:8000/api/v1/titles/1508669")
    .then((res) => res.json())
    .then((objects) => {
      console.log(objects);
      document.querySelector(".hero__description").innerText =
        objects.description;
      document.querySelector(".best_genres").innerText = objects.genres;
      document.querySelector(".best_dateDeSortie").innerText =
        objects.date_published;
      document.querySelector(".best_rated").innerText = objects.rated;
      document.querySelector(".best_score_imdb").innerText = objects.imdb_score;
      document.querySelector(".best_duree").innerText = objects.duration;
      document.querySelector(".best_pays").innerText = objects.countries;
      document.querySelector(".best_boxOffice").innerText =
        objects.worldwide_gross_income;

      document.querySelector(".best_realisateurs").innerText =
        objects.directors;
      document.querySelector(".best_acteurs").innerText = objects.actors;
      document.querySelector(".best_description").innerText =
        objects.description;

      console.log(objects.genres);
    });
}

// ******************  MOVIES BY GENRES   ***************************

//ACTION MOVIES

getActionMovies();

async function getActionMovies() {
  Promise.all([await fetch(urlAction), await fetch(urlAction2)])
    .then(function (res) {
      return Promise.all(
        res.map(function (res) {
          return res.json();
        })
      );
    })
    .then(function (dataGenre) {
      console.log(dataGenre);
      const MovieGs = dataGenre[0].results.concat(dataGenre[1].results);

      // GENRES ACTIONS
      var actionsMovies = document.getElementById("genres_content");

      MovieGs.slice(0, 7).map(function (actionM, index) {
        actionsMovies.insertAdjacentHTML(
          "beforeend",
          `<div class="item_box">
            <button id="GmoviesModal" onclick="getInfoG(${actionM.id})">
             <img  src="${actionM.image_url}" alt=${actionM.title} />
             </button>
             <h3>${actionM.title}</h3>
             <div>
            `
        );
      }).catch = (error) => {
        console.log(error);
      };
    });
}

//FAMILY MOVIES

getFamilyMovies();

async function getFamilyMovies() {
  Promise.all([await fetch(urlFamily), await fetch(urlFamily2)])
    .then(function (res) {
      return Promise.all(
        res.map(function (res) {
          return res.json();
        })
      );
    })
    .then(function (dataGenre) {
      console.log(dataGenre);
      const MovieGs = dataGenre[0].results.concat(dataGenre[1].results);

      // GENRES
      var familysMovies = document.getElementById("family_content");

      MovieGs.slice(0, 7).map(function (familyM, index) {
        familysMovies.insertAdjacentHTML(
          "beforeend",
          `<div class="item_box">
            <button id="GmoviesModal" onclick="getInfoG(${familyM.id})">
             <img  src="${familyM.image_url}" alt=${familyM.title} />
             </button>
             <h3>${familyM.title}</h3>
             <div>
            `
        );
      }).catch = (error) => {
        console.log(error);
      };
    });
}

//Thriller MOVIES

getThrillerMovies();

async function getThrillerMovies() {
  Promise.all([await fetch(urlThriller), await fetch(urlThriller2)])
    .then(function (res) {
      return Promise.all(
        res.map(function (res) {
          return res.json();
        })
      );
    })
    .then(function (dataGenre) {
      console.log(dataGenre);
      const MovieGs = dataGenre[0].results.concat(dataGenre[1].results);

      // GENRES
      var thrillersMovies = document.getElementById("thriller_content");

      MovieGs.slice(0, 7).map(function (thrillerM, index) {
        thrillersMovies.insertAdjacentHTML(
          "beforeend",
          `<div class="item_box">
            <button id="GmoviesModal" onclick="getInfoG(${thrillerM.id})">
             <img  src="${thrillerM.image_url}" alt=${thrillerM.title} />
             </button>
             <h3>${thrillerM.title}</h3>
             <div>
            `
        );
      }).catch = (error) => {
        console.log(error);
      };
    });
}

// LAST EXPERIENCE

//  MOVIES BY GENRES
const genres = [
  "Action",
  "Comedy",
  "Adventure",
  "Animation",
  "Thriller",
  "Family",
  "Fantasy",
  "Romance",
  "Sci-Fi",
  "Sport",
  "War",
  "Western",
];

// var genres_movies = document.getElementById("genres_movies");

genres.forEach(function (genre_movie, index, array) {
  "http://localhost:8000/api/v1/titles/?genre=" +
    genre_movie +
    "&sort_by=-imdb_score";
});

// for (const genre_movie of genres) {
//   // console.log(genre_movie);
//   "http://localhost:8000/api/v1/titles/?genre=" +
//     genre_movie +
//     "&sort_by=-imdb_score";
// }

console.log(genres[3]);
