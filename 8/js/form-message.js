import {createElement} from './util.js';

const successMessageFragment = document.createDocumentFragment();
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.body;
const successButton = document.querySelector('.success__button');
const successMessageItem = createElement(successMessageTemplate);

const deleteSuccessMessage = () => {
  successMessageItem.remove();
};

const sendingSuccessMessage = () => {
  successMessageFragment.appendChild(successMessageItem);
  body.appendChild(successMessageFragment);

  successButton.addEventListener('click', deleteSuccessMessage);
};

export {sendingSuccessMessage};
