
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const MIN_PHOTO_SIZE = 25;
const MAX_PHOTO_SIZE = 100;
const STEP_PHOTO_SIZE = 25;

const onScaleSmaller = () => {
  const value = scaleValue.value.slice(0, -1);
  if (value > MIN_PHOTO_SIZE) {
    scaleValue.value = `${value - STEP_PHOTO_SIZE}%`;
    imgPreview.style.transform = `scale(${(value - STEP_PHOTO_SIZE) / 100})`;
  }
};

const onScaleBigger = () => {
  const value = scaleValue.value.slice(0, -1);
  if (value < MAX_PHOTO_SIZE) {
    scaleValue.value = `${value - (- STEP_PHOTO_SIZE)}%`;
    imgPreview.style.transform = `scale(${(value - (- STEP_PHOTO_SIZE)) / 100})`;
  }
};

const changePhotoScale = () => {
  scaleSmaller.addEventListener('click', onScaleSmaller);
  scaleBigger.addEventListener('click', onScaleBigger);
};

export {changePhotoScale};
