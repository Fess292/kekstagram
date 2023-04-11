// моя функция выбора рандомного числа
// function randomNumber(min, max) {
//   if ((min >= 0) && (max >= 0)) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   } else {
//     console.log('введите корректное значение');
//   }
// }
// randomNumber(1, 3);

// код школы

// getRandomPositiveInteger(-100,10);

// function checkLine(line, maxLong) {
//   if (line.length <= maxLong ){
//     return true;
//   } else {
//     return false;
//   }
// }
// checkLine('привет', 2);

// код школы
// function checkStringLength (string, length) {
//   return string.length <= length;
// }
// checkStringLength('привет', 2);
// import {getRandomPositiveInteger} from './util.js';
// import {getRandomArrayElement} from './util.js';
import {similarPhotos} from './data.js';

// eslint-disable-next-line no-console
console.log(
  similarPhotos
);
