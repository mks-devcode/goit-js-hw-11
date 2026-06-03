import axios from "axios";

// export function getImagesByQuery(query) {
//     const BASE_URL = 'https://pixabay.com';
//     const END_POINT = '/api/';

//     const params = new URLSearchParams({
//         key: '56113716-8c020b23e7503bfe8f17bb94f',
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//     });

//     const url = `${BASE_URL}${END_POINT}?${params}`;

//     return fetch(url)
//         .then(response => response.json());
// };


const axiosInstance = axios.create({
    baseURL: 'https://pixabay.com',
    params: {
        key: '56113716-8c020b23e7503bfe8f17bb94f',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    },
});


export const getImagesByQuery = (query) => {
    return axiosInstance.get('/api/', {
        params: {
            q: query
        }
    }).then(res => res.data);
};

