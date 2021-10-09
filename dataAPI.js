// DATA from OC MOVIE

url = "http://localhost:8000/api/v1/titles/";
url2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
api_key = "e357fd2725831204ab847c99ae0e153c";
urlMovieDB =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  api_key +
  "&sort_by=popularity.desc ";
getRatedMovie();

async function getRatedMovie() {
  await fetch(url2)
    .then((res) => res.json())
    .then((data) => {
      const bestMovie3 = data.results[0];
      console.log(bestMovie3);
      document.getElementById("h1").innerText = bestMovie3.title;
      document.querySelector(".picture-movie").src = bestMovie3.image_url;

      fetch(bestMovie3.url)
        .then((res) => res.json())
        .then((objects) => {
          console.log(objects);
          document.querySelector(".hero__description").innerText =
            objects.description;
          //   const descrip = objects.description;
        });
    });
}

// Pour les catégory

urlBestMovies = url2;
urlGenre =
  "http://localhost:8000/api/v1/titles/?genre=" +
  genre +
  "&sort_by=-imdb_score";
genre = [
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

async function getBestMovies() {
  await fetch(url2)
    .then((res) => res.json())
    .then((BestMovies) => {
      for (i = 0; i++; i < 10) {
        console.log(BestMovies[i]);
        console.log(BestMovies.imdb_url);
      }
    })
    .catch(err);
  {
    console.log(err);
  }
}
