
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

const minPhotoSize = 25;
const maxPhotoSize = 100;
const stepPhotoSize = 25;

const onScaleSmaller = () => {
  const value = scaleValue.value.slice(0, -1);
  if (value > minPhotoSize) {
    scaleValue.value = `${value - stepPhotoSize}%`;
    imgPreview.style.transform = `scale(${(value - stepPhotoSize) / 100})`;
  }
};

const onScaleBigger = () => {
  const value = scaleValue.value.slice(0, -1);
  if (value < maxPhotoSize) {
    scaleValue.value = `${value - (- stepPhotoSize)}%`;
    imgPreview.style.transform = `scale(${(value - (- stepPhotoSize)) / 100})`;
  }
};

const changePhotoScale = () => {
  scaleSmaller.addEventListener('click', onScaleSmaller);
  scaleBigger.addEventListener('click', onScaleBigger);
};

export {changePhotoScale};
