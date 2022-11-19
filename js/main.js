import {openUploadModal, closeUploadModal} from './form.js';
import {changePhotoScale} from './photo-scale.js';
import {changeEffect} from './photo-effects.js';
import {addEffectsIntensity} from './effects-slider.js';
import {takePhotos} from './photos-server.js';


takePhotos();
openUploadModal();
closeUploadModal();
changePhotoScale();
changeEffect();
addEffectsIntensity();
