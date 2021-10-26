import {imgArr} from '../localStorage/imgArr.js'

export function addImgToGallery(url, selector) {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector(selector).append(img);
}
export function initializationGallery(selector){
    imgArr.forEach((el) => addImgToGallery(el, selector));
}