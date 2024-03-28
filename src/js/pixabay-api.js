import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function getImage(inputData) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '43066959-f9f55707df0fe34b818b99119',
        q: inputData,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;


    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }

        return response.json();
    });
}




