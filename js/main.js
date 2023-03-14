function randomNumber(min, max) {
  if ((min >= 0) && (max >= 0)) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  } else {
    console.log('введите корректное значение');
  }
}
randomNumber(1, 3);

function checkLine(line, maxLong) {
  if (line.length <= maxLong ){
    return true;
  } else {
    return false;
  }
}
checkLine('привет', 2);

