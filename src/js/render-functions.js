import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryImg } from '../main';

export const imageType = (images) => {
    return images.map(image =>
        `<li class="gallery-item">
           <a class="gallery-link" href="${image.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${image.webformatURL}"
               data-source="${image.largeImageURL}"
               alt="${image.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li class="item-description"><h3>Likes</h3><p>${image.likes}</p>
             </li>
             <li class="item-description"><h3>Views</h3><p>${image.views}</p>
               </li>
               <li class="item-description"><h3>Comments</h3><p>${image.comments}</p>
                 </li>
                 <li class="item-description"><h3>Downloads</h3><p>${image.downloads}</p>
                   </li>
             </ul>
           </li>`
   ).join('');
}

