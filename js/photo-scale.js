
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const onScaleSmaller = () => {
  const value = scaleValue.value.slice(0, -1);
  if (value >= 50) {
    scaleValue.value = `${value - 25}%`;
    imgPreview.style.transform = `scale(${(value - 25) / 100})`;
  }
};

const onScaleBigger = () => {
  const value = scaleValue.value.slice(0, -1);
  if (value <= 75) {
    scaleValue.value = `${value - (- 25)}%`;
    imgPreview.style.transform = `scale(${(value - (- 25)) / 100})`;
  }
};

const photoScale = () => {
  scaleSmaller.addEventListener('click', onScaleSmaller);
  scaleBigger.addEventListener('click', onScaleBigger);
};

export {photoScale};
