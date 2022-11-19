const photosList = document.querySelector ('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const photosListFragment = document.createDocumentFragment();

const createElement = (element) => element.cloneNode(true);

const changeElement = (element, value) => {
  element.querySelector('.picture__img').src = value.url;
  element.querySelector('.picture__comments').textContent = value.comments;
  element.querySelector('.picture__likes').textContent = value.likes;
  return element;
};

const createPhotos = (data) => {
  data.forEach ((photo) => {
    const photoElement = createElement(photoTemplate);
    changeElement(photoElement, photo);
    photosListFragment.appendChild(photoElement);
  });
  return photosListFragment;
};

const addPhotos = (data) => photosList.appendChild(createPhotos(data));

export {addPhotos};
