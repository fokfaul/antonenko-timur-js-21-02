import {initializationEventListener} from './Event/sendImage.js'
import {initializationGallery} from './DOM/gallery.js'
import {uploadBase64UrlToImgBB} from './API/uploadImg.js'

initializationEventListener(uploadBase64UrlToImgBB);
initializationGallery('.gallery');