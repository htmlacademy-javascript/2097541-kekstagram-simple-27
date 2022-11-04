import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);

const clearField = (field) => {
  field.value = '';
};

const onModalEscKeydown = (evt) => {
  if ( isEscapeKey(evt)) {
    uploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeUploadModal();
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
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  openUploadModal();
});

uploadCancel.addEventListener('click', () => {
  closeUploadModal();
});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

export {openUploadModal, closeUploadModal};
