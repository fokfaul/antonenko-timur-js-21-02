import {initializationEventListener} from './Event/sendImage'
import {initializationGallery} from './DOM/gallery'
import {uploadBase64UrlToImgBB} from './API/uploadImg'

initializationEventListener(uploadBase64UrlToImgBB);
initializationGallery('.gallery');