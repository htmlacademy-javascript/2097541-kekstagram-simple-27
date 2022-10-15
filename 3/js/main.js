const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('123', 10);

function getRandomNumber(min, max) {
  const isArgumentsValid = min >= 0 && max >= 0 && min <= max;
  if (isArgumentsValid) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  throw new RangeError('The arguments must be more than zero and the second argument must be greater than the first.');
}

getRandomNumber(1, 10);


const photosCount = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const descriptions = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.'
];

const likesCount = {
  min: 15,
  max: 200
};

const commentsCount = {
  min: 0,
  max: 200
};

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomNumber(likesCount.min, likesCount.max),
  comments: getRandomNumber(commentsCount.min, commentsCount.max)
});

const getPhotos = () => Array.from({length: photosCount}, (_, photoIndex) => createPhoto(photoIndex + 1));


getRandomArrayElement(descriptions);
getPhotos();
