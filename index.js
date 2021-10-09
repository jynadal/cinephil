// THE MOVIE DATA

const sliders = document.querySelector(".carousel__box");
const slider = document.querySelector(".carousel__box-items");
var scrollPerClick = 400;
var ImagePadding = 20;

var bestMovie;
var result;
console.log(sliders.clientWidth);
console.log(sliders.scrollWidth);
console.log(slider.length);

showMovieData();

var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      right: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}

async function showMovieData() {
  const api_key = "e357fd2725831204ab847c99ae0e153c";
  url2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
  url =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    api_key +
    "&sort_by=popularity.desc";

  // Beggin Fetch One
  await fetch(url2)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      const bestMovie = data.results[0];
      console.log(bestMovie.title);

      document.getElementById("h1").innerText = bestMovie.title;
      document.querySelector(".hero__description").innerText =
        bestMovie.overview;
      document.querySelector(".picture-movie").src = bestMovie.image_url;
      // `https://image.tmdb.org/t/p/w185${bestMovie.poster_path}`;

      movies = data.results;
      console.log(movies);
    })
    .catch(function (err) {
      console.log("Une etteur est survenue lors du Fetch " + err);
    });

  // movies.map(function (movie, index) {
  //   sliders.insertAdjacentHTML(
  //     "beforeend",
  //     `<div class="carousel__box-items">
  //     <img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" />
  //     <h4>${movie.original_title}</h4>
  //     </div>`
  //   );
  // });
}

// document.querySelector(".img-1").clientWidth + ImagePadding;

// End Fetch One
//}

//   URL: /discover/movie?sort_by=popularity.desc //for sampple

// // Beggin AXIOS One
// var result = await axios.get(
//   "https://api.themoviedb.org/3/discover/movie?api_key=" +
//     api_key +
//     "&sort_by=popularity.desc "
// );

// result = result.data.results;

// result.map(function (cur, index) {
//   // End AXIOS One

//   sliders.insertAdjacentHTML(
//     "beforeend",
//     `img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
//   );
// });

// scrollPerClick = document.querySelector(".img-1").clientWidth + ImagePadding;

//GET /api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains
