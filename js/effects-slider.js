import {effectsId, imgPreview, fieldsetEffects} from './photo-effects.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

const abc = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });


  fieldsetEffects.addEventListener('change', () => {
    if (effectsId === 'none') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValue.value = sliderElement.noUiSlider.get();
        imgPreview.style.removeProperty('filter');
      });
    }

    if (effectsId === 'chrome') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValue.value = sliderElement.noUiSlider.get();
        imgPreview.style.filter = `grayscale(${effectValue.value})`;
      });
    }

    if (effectsId === 'sepia') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValue.value = sliderElement.noUiSlider.get();
        imgPreview.style.filter = `sepia(${effectValue.value})`;
      });
    }

    if (effectsId === 'marvin') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        start: 100,
        step: 1
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValue.value = sliderElement.noUiSlider.get();
        imgPreview.style.filter = `invert(${effectValue.value}%)`;
      });
    }

    if (effectsId === 'phobos') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 1
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValue.value = sliderElement.noUiSlider.get();
        imgPreview.style.filter = `blur(${effectValue.value}px)`;
      });
    }

    if (effectsId === 'heat') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      });
      sliderElement.noUiSlider.on('update', () => {
        effectValue.value = sliderElement.noUiSlider.get();
        imgPreview.style.filter = `brightness(${effectValue.value})`;
      });
    }

  });
};

export {abc};
