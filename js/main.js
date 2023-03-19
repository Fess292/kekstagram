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
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger(-100,10);

function checkLine(line, maxLong) {
  if (line.length <= maxLong ){
    return true;
  } else {
    return false;
  }
}
checkLine('привет', 2);

// код школы
// function checkStringLength (string, length) {
//   return string.length <= length;
// }
// checkStringLength('привет', 2);

