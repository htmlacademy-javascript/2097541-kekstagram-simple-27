import {createElement, isEscapeKey} from './util.js';
import {onModalEscKeydown} from './form.js';

const errorMessageFragment = document.createDocumentFragment();
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.body;
const errorMessageItem = createElement(errorMessageTemplate);

const onMessageEscKeydown = (evt) => {
  if ( isEscapeKey(evt)) {
    evt.preventDefault();

    errorMessageItem.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
    document.addEventListener('keydown', onModalEscKeydown);
  }
};

const onNoMessageArea = (evt) => {
  const isArgumentValid = evt.target.className !== 'error__inner' && evt.target.className !== 'error__title';
  if (isArgumentValid){
    errorMessageItem.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
    document.addEventListener('keydown', onModalEscKeydown);
  }
};

const deleteErrorMessage = () => {
  errorMessageItem.remove();
  document.addEventListener('keydown', onModalEscKeydown);
};

const sendErrorMessage = () => {
  errorMessageFragment.appendChild(errorMessageItem);
  body.appendChild(errorMessageFragment);

  const errorButton = document.querySelector('.error__button');
  const errorMessage = document.querySelector('.error');

  errorButton.addEventListener('click', deleteErrorMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  errorMessage.addEventListener('click', onNoMessageArea);
  document.removeEventListener('keydown', onModalEscKeydown);
};

export {sendErrorMessage};
