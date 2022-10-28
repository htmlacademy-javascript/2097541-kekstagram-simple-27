import {getPhotos} from './data.js';

const photosList = document.querySelector ('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photos = getPhotos();

const photosListFragment = document.createDocumentFragment();

photos.forEach (({url, comments, likes}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photosListFragment.appendChild(photoElement);
});

const addPhotos = () => photosList.appendChild(photosListFragment);

export {addPhotos};
