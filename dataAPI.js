// DATA from OC MOVIE

url = "http://localhost:8000/api/v1/titles/";
url1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
url2 = "http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score";

urlGenre =
  "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score";
urlGenre2 =
  "http://localhost:8000/api/v1/titles/?genre=Action&page=2&sort_by=-imdb_score";

api_key = "e357fd2725831204ab847c99ae0e153c";
urlMovieDB =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  api_key +
  "&sort_by=popularity.desc ";

//var carousel__BestM = document.getElementById("carousel__data");

getRatedMovie();

async function getRatedMovie() {
  // await fetch(url2)
  //   .then((res) => res.json())
  //   .then((data2) => {
  //     console.log(data2);
  //   },
  await fetch(url1)
    .then((res) => res.json())
    .then((data1) => {
      console.log(data1);
      const BestMovies = data1.results;
      const BestMovie = BestMovies[0];
      console.log(BestMovies);
      // BEST MOVIE
      document.getElementById("h1").innerText = BestMovie.title;
      document.getElementById("best_title__modal").innerText = BestMovie.title;
      document.getElementById("home").url = BestMovie.image_url;
      document.querySelector(".hero_picture-movie").src = BestMovie.image_url;
      document.querySelector(".best_picture-modal").src = BestMovie.image_url;

      //BEST MOVIES FOR ALL THE MOVIES
      var carousel__BestM = document.getElementById("carousel__data__best");

      BestMovies.map(function (movie, index) {
        carousel__BestM.insertAdjacentHTML(
          "beforeend",
          `<div class="movie">
           <picture>
            <img class="img-${index}" src="${movie.image_url}" alt=${movie.title} />
           </picture>
           <div class="detail">
             <h4>${movie.title}</h4>
             <br />
             <h6>${movie.genres}</h6>
           </div>
           <!-- The Modal -->
    
           <button id="moviesModal" onclick="getInfo(${movie.id})">Savoir Plus
           </button>

          </div>`
        );
      });

      fetch(BestMovie.url)
        .then((res) => res.json())
        .then((objects) => {
          console.log(objects);
          document.querySelector(".hero__description").innerText =
            objects.description;
          document.querySelector(".best_genres").innerText = objects.genres;
          document.querySelector(".best_dateDeSortie").innerText =
            objects.date_published;
          document.querySelector(".best_rated").innerText = objects.rated;
          document.querySelector(".best_score_imdb").innerText =
            objects.imdb_score;
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

          //   const descrip = objects.description;
        });
    });
}
// Best Movies

// document.getElementById("h1").innerText = bestMovie.title;
// document.querySelector(".hero__description").innerText = bestMovie.overview;
// document.querySelector(".picture-movie").src = bestMovie.image_url;

// `https://image.tmdb.org/t/p/w185${bestMovie.poster_path}`;

// Pour les catégory

// urlGenre =
//   "http://localhost:8000/api/v1/titles/?genre=" +
//   genre +
//   "&sort_by=-imdb_score";
// genre = [
//   "Action",
//   "Comedy",
//   "Adventure",
//   "Animation",
//   "Thriller",
//   "Family",
//   "Fantasy",
//   "Romance",
//   "Sci-Fi",
//   "Sport",
//   "War",
//   "Western",
// ];
getMovieByGenres();
async function getMovieByGenres() {
  await fetch(urlGenre)
    .then((res) => res.json())
    .then((dataGenre) => {
      console.log(dataGenre);
      const MovieGs = dataGenre.results;
      console.log(MovieGs[0]);
      console.log(MovieGs);

      // GENRES ACTIONS
      var actionsMovies = document.getElementById("genres_content");

      MovieGs.map(function (actionM, index) {
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
      });
    });
}
// async function getBestMovies() {
//   await fetch(url2)
//     .then((res) => res.json())
//     .then((BestMovies) => {
//       for (i = 0; i++; i < 10) {
//         console.log(BestMovies[i]);
//         console.log(BestMovies.imdb_url);
//       }
//     })
//     .catch(err);
//   {
//     console.log(err);
//   }
// }

//<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`

// <div id="movieModal" class="modal">
//   <div class="modal__content">
//     <span class="close">&times;</span>
//     <h2 id="modal__title">Titr : </h2>
//     <div class="image">
//       <img class="img-${index}" src="{${movie.image_url}}" alt={${movie.title}}/>
//     </div>
//     <div class="infosTech">
//       <p>Genres: </p>
//       <p>Date de sortie: </p>
//       <p>Rated :</p>
//       <p>Score imdb</p>
//       <p>Durée</p>
//       <p>Pays d'origine : </p>
//       <p>Box Office</p>
//     </div>
//     <div class="infos">
//       <p>Réalisateur</p>
//       <p>Les acteurs: </p>
//       <p>Résumé du film:</p>
//     </div>

//   </div>
// </div>

//  `<div class="item">
//         <a type="button" onclick="getInfo(${actionM.id})>
//          <img class="item" src="${actionM.image_url}" alt=${actionM.title} />
//          </a>
//          </div>
//         `;
