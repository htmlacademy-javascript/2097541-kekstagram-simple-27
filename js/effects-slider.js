import {effectsId, imgPreview, fieldsetEffects} from './photo-effects.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

sliderElement.classList.add('visually-hidden');

const sliderSettings = {
  none: {
    minRange: 0,
    maxRange: 1,
    start: 1,
    step: 0.1
  },
  chrome: {
    minRange: 0,
    maxRange: 1,
    start: 1,
    step: 0.1,
    filter: 'grayscale',
    units: ''
  },
  sepia: {
    minRange: 0,
    maxRange: 1,
    start: 1,
    step: 0.1,
    filter: 'sepia',
    units: ''
  },
  marvin: {
    minRange: 0,
    maxRange: 100,
    start: 100,
    step: 1,
    filter: 'invert',
    units: '%'
  },
  phobos: {
    minRange: 0,
    maxRange: 3,
    start: 3,
    step: 1,
    filter: 'blur',
    units: 'px'
  },
  heat: {
    minRange: 0,
    maxRange: 3,
    start: 3,
    step: 0.1,
    filter: 'brightness',
    units: ''
  },
};

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => parseFloat(value),
    },
  });
};

const onFieldsetEffects = () => {
  sliderElement.classList.remove('visually-hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: sliderSettings[effectsId].minRange,
      max: sliderSettings[effectsId].maxRange
    },
    start: sliderSettings[effectsId].start,
    step: sliderSettings[effectsId].step
  });

  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    imgPreview.style.filter = `${sliderSettings[effectsId].filter}(${effectValue.value}${sliderSettings[effectsId].units})`;
  });

  if (effectsId === 'none') {
    imgPreview.style.removeProperty('filter');
    sliderElement.classList.add('visually-hidden');
  }
};

const addEffectsIntensity = () => {
  createSlider();
  fieldsetEffects.addEventListener('change', onFieldsetEffects);
};

export {addEffectsIntensity};
