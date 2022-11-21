import {createElement, isEscapeKey} from './util.js';

const successMessageFragment = document.createDocumentFragment();
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.body;
const successMessageItem = createElement(successMessageTemplate);

const onMessageEscKeydown = (evt) => {
  if ( isEscapeKey(evt)) {
    evt.preventDefault();

    successMessageItem.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
  }
};

const onNoMessageArea = (evt) => {
  const isArgumentValid = evt.target.className !== 'success__inner' && evt.target.className !== 'success__title';
  if (isArgumentValid){
    successMessageItem.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
  }
};

const deleteSuccessMessage = () => {
  successMessageItem.remove();
};

const sendSuccessMessage = () => {
  successMessageFragment.appendChild(successMessageItem);
  body.appendChild(successMessageFragment);

  const successButton = document.querySelector('.success__button');
  const successMessage = document.querySelector('.success');

  successButton.addEventListener('click', deleteSuccessMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  successMessage.addEventListener('click', onNoMessageArea);
};

export {sendSuccessMessage};
