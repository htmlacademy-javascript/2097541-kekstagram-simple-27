import {openUploadModal, closeUploadModal, setFormSubmit} from './form.js';
import {changePhotoScale} from './photo-scale.js';
import {changeEffect} from './photo-effects.js';
import {addEffectsIntensity} from './effects-slider.js';
import {getData} from './api.js';
import {addPhotos} from './miniatures.js';

getData(addPhotos);
openUploadModal();
closeUploadModal();
changePhotoScale();
changeEffect();
addEffectsIntensity();
setFormSubmit(closeUploadModal);
