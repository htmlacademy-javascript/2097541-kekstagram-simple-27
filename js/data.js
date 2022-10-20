import {getRandomNumber, getRandomArrayElement} from './util.js';

const PHOTOS_COUNT = 25;

const DESCRIPTIONS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.'
];

const LikesCount = {
  MIN: 15,
  MAX: 200
};

const CommentsCount = {
  MIN: 0,
  MAX: 200
};

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(LikesCount.MIN, LikesCount.MAX),
  comments: getRandomNumber(CommentsCount.MIN, CommentsCount.MAX)
});

const getPhotos = () => Array.from({length: PHOTOS_COUNT}, (_, photoIndex) => createPhoto(photoIndex + 1));

export {getPhotos};
