// DATA from OC MOVIE

url = "http://localhost:8000/api/v1/titles/";
url2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
api_key = "e357fd2725831204ab847c99ae0e153c";
urlMovieDB =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  api_key +
  "&sort_by=popularity.desc ";

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
      document.querySelector(".picture-movie").src = BestMovie.image_url;

      //BEST MOVIES

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
    
           <button id="btnModal">Savoir Plus
           </button>

            <div id="movieModal" class="modal">            
              <div class="modal__content">
                <span class="close">&times;</span>
                <h2 id="modal__title">Titr : </h2>
                <div class="image">
                  <img class="img-${index}" src="{${movie.image_url}}" alt={${movie.title}}/>
                </div>
                <div class="infosTech">
                  <p>Genres: </p>
                  <p>Date de sortie: </p>
                  <p>Rated :</p>
                  <p>Score imdb</p>
                  <p>Durée</p>
                  <p>Pays d'origine : </p>
                  <p>Box Office</p>
                </div>
                <div class="infos">
                  <p>Réalisateur</p>
                  <p>Les acteurs: </p>
                  <p>Résumé du film:</p>
                </div>
           
              </div>
            </div>

          </div>`
        );
      });

      //for (let i = 0; i++; i < 10) {
      // carousel__BestM.innerHTML("<p>{i}</p>");

      // console.log(BestMovies3[i]);
      // console.log(BestMovies3.imdb_url);

      // carousel__BestM.insertAdjacentHTML(
      //   "beforeend",
      //   `<div class="movie">
      //     <picture>
      //       <img src="images/films/pulp-fiction.jpg" alt="pulp-fiction" />
      //     </picture>
      //     <div class="detail">
      //       <h4>Titre du film</h4>
      //       <br />
      //       <p>New arrival</p>
      //     </div>
      //   </div>`
      // );
      //}

      fetch(BestMovie.url)
        .then((res) => res.json())
        .then((objects) => {
          console.log(objects);
          document.querySelector(".hero__description").innerText =
            objects.description;
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
