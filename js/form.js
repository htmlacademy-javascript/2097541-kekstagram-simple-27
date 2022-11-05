import {isEscapeKey, clearField} from './util.js';

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

  clearField(uploadFile);
  document.removeEventListener('keydown', onModalEscKeydown);
};

uploadFile.addEventListener('change', () => {
  openUploadModal();
});

uploadCancel.addEventListener('click', () => {
  closeUploadModal();
});

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {openUploadModal, closeUploadModal};
