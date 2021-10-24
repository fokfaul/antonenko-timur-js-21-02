import {Animation} from '../animation/loader.js'
import {imgArr} from '../localStorage/imgArr.js'
import {addImgToGallery} from '../DOM/gallery.js'

export function uploadBase64UrlToImgBB(file) {
    const stopAnimation = Animation();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const formData = new FormData();
        formData.set('key', '6e6c7fdbede63ac17e6e2cf92bfac563');
        formData.set('image', reader.result.replace(/^.*,/, ''));
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        }).then(response => {
            stopAnimation();
            return response.json();})
            .then((response) => {
                imgArr.push(response.data.display_url)
                localStorage.setItem('imgArr', JSON.stringify(imgArr))
                addImgToGallery(response.data.display_url, ".gallery")
            })
            .catch(console.error);
    }
}