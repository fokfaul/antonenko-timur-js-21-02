import * as form from '../DOM/form'

export function initializationEventListener(callback : Function) : void => {
    form.uploadButton.addEventListener('click', () => {
        if(form.inputFile.files[0]){
            callback(form.inputFile.files[0]);
            form.inputFile.value = "";
        }
    });
}