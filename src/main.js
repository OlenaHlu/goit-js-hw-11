import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImage } from './js/pixabay-api'
import { imageType } from './js/render-functions';

export const galleryImg = document.querySelector('.gallery');
export const formData = document.querySelector('.form');



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt'
});


formData.addEventListener('submit', event => {
    event.preventDefault();
    const inputData = event.target.elements.image.value.trim();

    if (inputData === '') {
        iziToast.error({
            color: 'red',
            position: 'center',
            message: "Please enter a search query!",
        });
        return;
    };

    const loader = document.createElement('div');
    loader.classList.add('loader');
    document.body.appendChild(loader); 


    getImage(inputData)
        .then(data => {
            const markup = imageType(data.hits);
            galleryImg.innerHTML = markup;
             
            lightbox.refresh();
            
            if (data.hits.length === 0) {
                iziToast.info({
                    title: 'Info',
                    position: 'center',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
                return;
            } 
        })
        .catch(error => {
            iziToast.error({
                color: 'red',
                position: 'center',
                message: "Sorry, there was an error processing your request. Please try again!",
            });
        })
        .finally(() => {
           formData.reset();
            document.body.removeChild(loader);
        });
});

