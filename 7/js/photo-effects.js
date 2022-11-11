const imgPreview = document.querySelector('.img-upload__preview');
const fieldsetEffects = document.querySelector('.img-upload__effects');
let effectsId = '';
const effects = {
  'effect-none' : 'none',
  'effect-chrome' : 'chrome',
  'effect-sepia' : 'sepia',
  'effect-marvin' : 'marvin',
  'effect-phobos' : 'phobos',
  'effect-heat' : 'heat'
};

const onEffectChange = (evt) => {
  imgPreview.classList.remove(`effects__preview--${effectsId}`);
  if (evt.target.matches('input[type="radio"]')) {
    imgPreview.classList.add(`effects__preview--${effects[evt.target.id]}`);
    effectsId = effects[evt.target.id];
  }
};

const changeEffect = () => {
  fieldsetEffects.addEventListener('change', onEffectChange);
};

export {changeEffect, effectsId, fieldsetEffects, imgPreview};
