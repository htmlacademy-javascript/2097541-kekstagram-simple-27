import {isEscapeKey, clearField, showAlert} from './util.js';
import {imgPreview, effectsId} from './photo-effects.js';
import {sliderElement} from './effects-slider.js';
import {scaleValue} from './photo-scale.js';
import {sendData} from './api.js';
import {sendSuccessMessage} from './success-message.js';
import {sendErrorMessage} from './error-message.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const effectInputNone = document.querySelector('#effect-none');
const uploadPhotoForm = document.querySelector('#upload-file');
const submitButton = document.querySelector('#upload-submit');
const comment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});

const clearPhotoForm = () => {
  imgPreview.classList.remove(`effects__preview--${effectsId}`);
  imgPreview.classList.add('effects__preview--none');
  imgPreview.style.removeProperty('filter');
  sliderElement.classList.add('visually-hidden');
  imgPreview.style.transform = `scale(${1})`;
  uploadPhotoForm.value = '';
  scaleValue.value = `${100}%`;
  comment.value = '';

  if (!effectInputNone.checked) {
    effectInputNone.checked = true;
  }
};

const onModalEscKeydown = (evt) => {
  if ( isEscapeKey(evt)) {
    evt.preventDefault();

    uploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');

    clearPhotoForm();
    clearField(uploadFile);
    document.removeEventListener('keydown', onModalEscKeydown);
  }
};

const openUploadModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
};

const closeUploadModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  clearPhotoForm();
  clearField(uploadFile);
  document.removeEventListener('keydown', onModalEscKeydown);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setFormSubmit = (onSuccess) => {
  const onFormValid = (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          sendSuccessMessage();
        },
        () => {
          sendErrorMessage();
          unblockSubmitButton();
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        },
        new FormData(evt.target),
      );
    }
  };

  form.addEventListener('submit', onFormValid);
};

uploadFile.addEventListener('change', openUploadModal);

uploadCancel.addEventListener('click', closeUploadModal);

export {openUploadModal, closeUploadModal, setFormSubmit, onModalEscKeydown};
