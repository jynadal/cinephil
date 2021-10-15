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
urlAdventure =
  "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score";
urlAdventure2 =
  "http://localhost:8000/api/v1/titles/?genre=Adventure&page=2&sort_by=-imdb_score";
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
// let carousel_section = document.getElementById("carousel_section_genre");
// carousel_section.addEventListener("onchange", (e) => {
//   console.log((carousel_section.addEventListener.value = this.value));
//   // console.log(`e.target.value = ${e.target.value}`);
// });

// if (carousel_section === "bestMovies") {
//   getRatedMovie();
// }
// if (carousel_section === "actionsMovies") getActionMovies();
// if (carousel_section === "familyMovies") getFamilyMovies();
//});

// function getGenre() {
//   console.log(carousel_section);
//   if (carousel_section === "bestMovies") {
//     getRatedMovie();
//   }
//   if (carousel_section === "actionsMovies") getActionMovies();
//   if (carousel_section === "familyMovies") getFamilyMovies();
// }

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

  // BTN Controler for Thriller
  const gap = 20;

  const thrillerCarousel = document.getElementById("thriller_carousel");
  let contentS1 = document.getElementById("thriller_content");

  let nextThriller = document.getElementById("nextThriller");

  let prevThriller = document.getElementById("prevThriller");

  nextThriller.addEventListener("click", (e) => {
    console.log("Thriller Next Click");
    thrillerCarousel.scrollBy(width + gap, 0);
    if (thrillerCarousel.scrollWidth !== 0) {
      prevThriller.style.display = "flex";
    }
    if (
      contentS1.scrollWidth - width - gap <=
      thrillerCarousel.scrollLeft + width
    ) {
      nextThriller.style.display = "none";
    }
  });
  prevThriller.addEventListener("click", (e) => {
    console.log("Thriller Previous Click");
    thrillerCarousel.scrollBy(-(width + gap), 0);
    if (thrillerCarousel.scrollLeft - width - gap <= 0) {
      prevThriller.style.display = "none";
    }
    if (
      !contentS1.scrollWidth - width - gap <=
      thrillerCarousel.scrollLeft + width
    ) {
      nextThriller.style.display = "flex";
    }
  });

  let width = thrillerCarousel.offsetWidth;
  window.addEventListener(
    "resize",
    (e) => (width = thrillerCarousel.offsetWidth)
  );
}

// **********************FAMILY MOVIES  **********************

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

      // GENRES FAMILY
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

  // BTN Controler for Family
  const gap = 20;

  const familyCarousel = document.getElementById("family_carousel");
  let contentS2 = document.getElementById("family_content");

  let nextFamily = document.getElementById("nextFamily");

  let prevFamily = document.getElementById("prevFamily");

  nextFamily.addEventListener("click", (e) => {
    console.log("Family Next Click");
    familyCarousel.scrollBy(width + gap, 0);
    if (familyCarousel.scrollWidth !== 0) {
      prevFamily.style.display = "flex";
    }
    if (
      contentS2.scrollWidth - width - gap <=
      familyCarousel.scrollLeft + width
    ) {
      nextFamily.style.display = "none";
    }
  });
  prevFamily.addEventListener("click", (e) => {
    console.log("Family Previous Click");
    familyCarousel.scrollBy(-(width + gap), 0);
    if (familyCarousel.scrollLeft - width - gap <= 0) {
      prevFamily.style.display = "none";
    }
    if (
      !contentS2.scrollWidth - width - gap <=
      familyCarousel.scrollLeft + width
    ) {
      nextFamily.style.display = "flex";
    }
  });

  let width = familyCarousel.offsetWidth;
  window.addEventListener(
    "resize",
    (e) => (width = familyCarousel.offsetWidth)
  );
}

//    ACTION MOVIES

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
      var actionsMovies = document.getElementById("actions_content");

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

  // BTN Controler for Actions
  const gap = 20;

  const actionsCarousel = document.getElementById("actions_carousel");
  let contentS3 = document.getElementById("actions_content");

  let nextActions = document.getElementById("nextActions");

  let prevActions = document.getElementById("prevActions");

  nextActions.addEventListener("click", (e) => {
    console.log("Actions Next Click");
    actionsCarousel.scrollBy(width + gap, 0);
    if (actionsCarousel.scrollWidth !== 0) {
      prevActions.style.display = "flex";
    }
    if (
      contentS3.scrollWidth - width - gap <=
      actionsCarousel.scrollLeft + width
    ) {
      nextActions.style.display = "none";
    }
  });
  prevActions.addEventListener("click", (e) => {
    console.log("Actions Previous Click");
    actionsCarousel.scrollBy(-(width + gap), 0);
    if (actionsCarousel.scrollLeft - width - gap <= 0) {
      prevActions.style.display = "none";
    }
    if (
      !contentS3.scrollWidth - width - gap <=
      actionsCarousel.scrollLeft + width
    ) {
      nextActions.style.display = "flex";
    }
  });

  let width = actionsCarousel.offsetWidth;
  window.addEventListener(
    "resize",
    (e) => (width = actionsCarousel.offsetWidth)
  );
}

// ***************************************************************************************
//     Adventure MOVIES

getAdventureMovies();

async function getAdventureMovies() {
  Promise.all([await fetch(urlAdventure), await fetch(urlAdventure2)])
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
      var adventuresMovies = document.getElementById("adventure_content");

      MovieGs.slice(0, 7).map(function (adventureM, index) {
        adventuresMovies.insertAdjacentHTML(
          "beforeend",
          `<div class="item_box">
            <button id="GmoviesModal" onclick="getInfoG(${adventureM.id})">
             <img  src="${adventureM.image_url}" alt=${adventureM.title} />
             </button>
             <h3>${adventureM.title}</h3>
             <div>
            `
        );
      }).catch = (error) => {
        console.log(error);
      };
    });

  // BTN Controler for Adventure
  const gap = 20;

  const adventureCarousel = document.getElementById("adventure_carousel");
  let contentAd = document.getElementById("adventure_content");

  let nextAdventure = document.getElementById("nextAdventure");

  let prevAdventure = document.getElementById("prevAdventure");

  nextAdventure.addEventListener("click", (e) => {
    console.log("Adventure Next Click");
    adventureCarousel.scrollBy(width + gap, 0);
    if (adventureCarousel.scrollWidth !== 0) {
      prevAdventure.style.display = "flex";
    }
    if (
      contentAd.scrollWidth - width - gap <=
      adventureCarousel.scrollLeft + width
    ) {
      nextAdventure.style.display = "none";
    }
  });
  prevAdventure.addEventListener("click", (e) => {
    console.log("Adventure Previous Click");
    adventureCarousel.scrollBy(-(width + gap), 0);
    if (adventureCarousel.scrollLeft - width - gap <= 0) {
      prevAdventure.style.display = "none";
    }
    if (
      !contentAd.scrollWidth - width - gap <=
      adventureCarousel.scrollLeft + width
    ) {
      nextAdventure.style.display = "flex";
    }
  });

  let width = adventureCarousel.offsetWidth;
  window.addEventListener(
    "resize",
    (e) => (width = adventureCarousel.offsetWidth)
  );
}

// ***************************************************************************************

// LAST EXPERIENCE

//  MOVIES BY GENRES
const all_genres = [
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

all_genres.forEach(function (genre_movie, index, array) {
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
