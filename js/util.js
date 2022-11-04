const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('123', 10);

const getRandomNumber = (min, max) => {
  const isArgumentsValid = min >= 0 && max >= 0 && min <= max;
  if (isArgumentsValid) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new RangeError('The arguments must be more than zero and the second argument must be greater than the first.');
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, getRandomArrayElement, isEscapeKey};
