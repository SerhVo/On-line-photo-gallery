import { getData } from './getData.js';
import { renderGallery } from './renderGallery.js';

const init = async (selectorWrapper) => {
    const wrapper = document.querySelector(selectorWrapper);
    const photos = await getData();
    renderGallery(wrapper, photos);

};

init('.gallery__wrapper');