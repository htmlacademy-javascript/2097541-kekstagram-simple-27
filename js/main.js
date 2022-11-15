import {addPhotos} from './miniatures.js';
import {openUploadModal, closeUploadModal} from './form.js';
import {changePhotoScale} from './photo-scale.js';
import {changeEffect} from './photo-effects.js';
import {addEffectsIntensity} from './effects-slider.js';

addPhotos();

openUploadModal();
closeUploadModal();
changePhotoScale();
changeEffect();
addEffectsIntensity();
