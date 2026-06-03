import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, imagesTemplate, lightbox, showLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = formData.get('search-text').trim();
    if (value === '') {
        return iziToast.error({
            message: 'Search field cannot be empty!',
            position: 'topRight'
            });
    };

    clearGallery();

    showLoader();

    getImagesByQuery(value).then(data => {
        console.log(data)

        if (data.hits.length === 0) {
            return iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
            });
        };

        createGallery(data.hits);
    })
        .catch(error => iziToast.error({
            message: error.message,
            position: 'topRight'
        })).finally(() => { hideLoader(); });
    
    e.target.reset();
});



// formEl.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const value = formData.get('search-text');

//     getImagesByQuery(value).then(res => {
//         console.log(res.data)
//         if (res.data.hits.length === 0) {
//             return iziToast.error({
//             message: 'Sorry, there are no images matching your search query. Please try again!',
//             position: 'topRight'
//             });
//         };
//         const markup = imagesTemplate(res.data.hits);
//         console.log(markup)
//         ulElem.innerHTML = markup;
//     }).catch(error => console.log(error));
//     e.target.reset();
// });






