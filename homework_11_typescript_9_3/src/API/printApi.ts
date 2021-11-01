import {table_body, table_head, table_nav} from '../DOM/table'
import {swapi} from './swapi'
import {Api} from '../interface/people'

export function printApiPeople (obj: Api, tableBody: HTMLElement, tableNav: HTMLElement): void{
    tableBody.innerHTML = "";
    obj.results.forEach(person => {
       const tr = document.createElement("tr");
       tr.innerHTML = "<td>"+person.name+"</td><td>"+person.gender+"</td><td>"+person.height+"</td><td>"+person.mass+"</td>";
       tableBody.append(tr);
    });
    tableNav.innerHTML = "";
    if(obj.previous !== null)
    {
       const li_previous = document.createElement("li");
       li_previous.innerHTML = "Преведущая страница";
       li_previous.addEventListener('click', () => swapi.anotherPage(printApiPeople, console.error, obj.previous, tableBody, tableNav));
       tableNav.append(li_previous);
    }
    if(obj.next !== null)
    {
       const li_next = document.createElement("li");
       li_next.innerHTML = "Следующая страница";
       li_next.addEventListener('click', () => swapi.anotherPage(printApiPeople, console.error, obj.next, tableBody, tableNav));
       tableNav.append(li_next);
    }
}