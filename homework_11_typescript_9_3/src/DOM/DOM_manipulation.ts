export function getElementById(id: string): HTMLElement{
    return document.getElementById(id)
}

export function getFirstElementBySelector(element : HTMLElement, selector: string): HTMLElement{
    return element.querySelectorAll(selector)[0]
}