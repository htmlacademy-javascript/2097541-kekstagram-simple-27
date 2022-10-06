function checkStringLength(string, minLength, maxLength) {
  if (string.length >= minLength && string.length <= maxLength) {
    return true;
  }
  return false;
}

function getRandomNumber(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 0 / 0;
}
