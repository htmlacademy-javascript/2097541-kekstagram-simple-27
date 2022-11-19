const ALERT_SHOW_TIME = 5000;

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

const clearField = (field) => {
  field.value = '';
};

const createElement = (element) => element.cloneNode(true);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomNumber, getRandomArrayElement, isEscapeKey, clearField, showAlert, createElement};
