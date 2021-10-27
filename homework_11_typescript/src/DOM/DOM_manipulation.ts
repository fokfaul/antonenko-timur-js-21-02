export function getElementById(id: string){
    return document.getElementById(id)
}

export function getFirstElementBySelector(element : HTMLElement, selector: string){
    return element.querySelectorAll(selector)[0]
}