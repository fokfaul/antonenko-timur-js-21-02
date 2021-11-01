export const swapi = {
    getFilms(callback: Function, errorCallback: Function, tableBody: HTMLElement, tableNav: HTMLElement) {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(response => callback(response, tableBody, tableNav))
        .catch(errorCallback)
    },
    anotherPage(callback: Function, errorCallback: Function, link: string, tableBody: HTMLElement, tableNav: HTMLElement){
        fetch(link)
        .then(response => response.json())
        .then(response => callback(response, tableBody, tableNav))
        .catch(errorCallback)
   }
}