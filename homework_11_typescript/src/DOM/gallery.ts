import {imgArr} from '../localStorage/imgArr'

export function addImgToGallery(url : string, selector : string): void {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector(selector).append(img);
}
export function initializationGallery(selector : string): void{
    imgArr.forEach((el : string) => addImgToGallery(el, selector));
}