/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const promoAdv = document.querySelectorAll(".promo__adv img");
const promoGenre = document.querySelector(".promo__genre");
const promoBg = document.querySelector(".promo__bg");
const promoInteractiveList = document.querySelector(".promo__interactive-list");
const button = document.querySelector("button");
const filmInput = document.querySelector(".adding__input");
const deleteFilmArr = document.querySelectorAll(".delete");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const filmName = filmInput.value;
  if (filmName.length > 21) {
    movieDB.movies.push(filmName.slice(0, 21) + "...");
  } else {
    movieDB.movies.push(filmInput.value);
  }
});

promoInteractiveList.addEventListener("click", function (e) {
  const target = e.target;
  if (target.className === "delete") {
    target.parentNode.remove();
  }
});

function removeAdv(arr) {
  arr.forEach((element) => {
    element.remove();
  });
}

function changeText(block) {
  block.textContent = "драма";
}

function changeBg(block) {
  block.style.backgroundImage = "url(./img/bg.jpg)";
}

function displayMovieTitles(list) {
  const sortedArr = movieDB.movies.sort();

  list.innerHTML = "";

  sortedArr.forEach((item, i) => {
    list.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${sortedArr[i]}
            <div class="delete"></div>
        </li>
      `;
  });
}

removeAdv(promoAdv);
changeText(promoGenre);
changeBg(promoBg);
displayMovieTitles(promoInteractiveList);
