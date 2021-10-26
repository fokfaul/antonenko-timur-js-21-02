import * as form from '../DOM/form.js'

export const initializationEventListener = (callback) => {
    form.uploadButton.addEventListener('click', () => {
        if(form.inputFile.files[0]){
            callback(form.inputFile.files[0]);
            from.inputFile.value = "";
        }
    });
}