import {addPhotos} from './miniatures.js';
import {openUploadModal, closeUploadModal} from './form.js';
import {photoScale} from './photo-scale.js';
import {changeEffect} from './photo-effects.js';

addPhotos();

openUploadModal();
closeUploadModal();
photoScale();
changeEffect();
