const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('123', 10);

const getRandomNumber = (min, max) => {
  const isArgumentsValid = min >= 0 && max >= 0 && min <= max;
  if (isArgumentsValid) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new RangeError('The arguments must be more than zero and the second argument must be greater than the first.');
};

getRandomNumber(1, 10);


const PHOTOS_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

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

getPhotos();
