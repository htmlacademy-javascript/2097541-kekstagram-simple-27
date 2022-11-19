import {addPhotos} from './miniatures.js';

const takePhotos = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {addPhotos(photos);});
};

export {takePhotos};
