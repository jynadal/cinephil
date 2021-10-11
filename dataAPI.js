// DATA from OC MOVIE

url = "http://localhost:8000/api/v1/titles/";
url2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

//var carousel__BestM = document.getElementById("carousel__data");

getRatedMovie();

async function getRatedMovie() {
  await fetch(url2)
    .then((res) => res.json())
    .then((data) => {
      const BestMovies = data.results;
      const BestMovie = BestMovies[0];
      // BEST MOVIE
      document.getElementById("h1").innerText = BestMovie.title;
      document.getElementById("best_title__modal").innerText = BestMovie.title;
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
    
           <button id="btnMovieModal" onclick="getInfo(${movie.id})">Savoir Plus
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
          document.querySelector(".dateDeSortie").innerText =
            objects.date_published;
          document.querySelector(".rated").innerText = objects.rated;
          document.querySelector(".score_imdb").innerText = objects.imdb_score;
          document.querySelector(".duree").innerText = objects.duration;
          document.querySelector(".pays").innerText = objects.countries;
          document.querySelector(".boxOffice").innerText =
            objects.worldwide_gross_income;

          document.querySelector(".realisateurs").innerText = objects.directors;
          document.querySelector(".acteurs").innerText = objects.actors;
          document.querySelector(".description").innerText =
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
