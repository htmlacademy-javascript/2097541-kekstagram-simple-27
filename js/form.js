import {isEscapeKey, clearField} from './util.js';
import {imgPreview, effectsId} from './photo-effects.js';
import {sliderElement} from './effects-slider.js';
import {scaleValue} from './photo-scale.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error',
});


const onModalEscKeydown = (evt) => {
  if ( isEscapeKey(evt)) {
    evt.preventDefault();

    uploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');

    imgPreview.classList.remove(`effects__preview--${effectsId}`);
    imgPreview.classList.add('effects__preview--none');
    imgPreview.style.removeProperty('filter');
    sliderElement.classList.add('visually-hidden');
    imgPreview.style.transform = `scale(${1})`;
    scaleValue.value = `${100}%`;

    clearField(uploadFile);
    document.removeEventListener('keydown', onModalEscKeydown);
  }
};

const onFormValid = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
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

  imgPreview.classList.remove(`effects__preview--${effectsId}`);
  imgPreview.classList.add('effects__preview--none');
  imgPreview.style.removeProperty('filter');
  sliderElement.classList.add('visually-hidden');
  imgPreview.style.transform = `scale(${1})`;

  clearField(uploadFile);
  document.removeEventListener('keydown', onModalEscKeydown);
};

uploadFile.addEventListener('change', openUploadModal);

uploadCancel.addEventListener('click', closeUploadModal);

form.addEventListener('submit', onFormValid);

export {openUploadModal, closeUploadModal};
