import {getElementById} from './DOM_manipulation'
import {printApiPeople} from '../API/printApi'
import {swapi} from '../API/swapi'
import {TableHeadColumn} from '../API/table-header'

export const table_body = getElementById("tablePersonId").tBodies[0];
export const table_head = getElementById("tablePersonId").tHead;
export const table_nav = getElementById("tableNavigationId");

function tdEvent(column: number, direction: number): void{
    this.sortTable = function(){
        table_body.append(...Array.from(table_body.rows)
                                  .sort((rowA, rowB) => {
                                    if(!isNaN(rowA.cells[column].innerHTML) && !isNaN(rowB.cells[column].innerHTML))
                                        return Number(rowA.cells[column].innerHTML) >= Number(rowB.cells[column].innerHTML) ? direction : 0-direction;
                                    else
                                        return rowA.cells[column].innerHTML >= rowB.cells[column].innerHTML ? direction : 0-direction;
                                  }));
        direction = 0 - direction;
    }
}

export function tableInitialisation(tableHeader: Array<TableHeadColumn>): void{
    tableHeader.forEach((el: TableHeadColumn) => {
        const td = document.createElement("td");
        const td_func = new tdEvent(el.value, 1);
        td.innerHTML = el.name;
        td.addEventListener('click', () => td_func.sortTable());
        table_head.append(td);
    });
    swapi.getFilms(printApiPeople, console.error, table_body, table_nav);
}