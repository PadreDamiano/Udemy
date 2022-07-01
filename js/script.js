'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', ''),
          count = +prompt('На сколько оцените его?', '');

    if (film != "" && count != "" && film != null  && count != null && film.length < 50){
        personalMovieDB.movies[film] = count;
        console.log('done');
    } else {
        console.log('error');
        i--;        
    }
    
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);