"use strict";

let numberOfFilms;
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privet: false,
};

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотренно маловато фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Киноман");
  } else {
    console.log("Ошибка");
  }
}

function showMyDB(hidden) {
  if (!hiden) {
    console.log(personaMovieDB);
  }
}

function wrightYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимій жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

wrightYourGenres();
showMyDB(personalMovieDB.privet);

console.log(personalMovieDB);
