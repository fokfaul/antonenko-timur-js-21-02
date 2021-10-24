const table_body = document.getElementById("tablePersonId").tBodies[0];
const table_head = document.getElementById("tablePersonId").tHead;
const table_nav = document.getElementById("tableNavigationId");

const tableHeader = [{name:"Имя",value:0,direction:1},{name:"Пол",value:1,direction:1},{name:"Рост",value:2,direction:1},{name:"Вес",value:3,direction:1}];
function sortTable(column){
    const direction = tableHeader[column].direction;
    tableHeader[column].direction = 0 - direction;
    table_body.append(...Array.from(table_body.rows)
                              .sort((rowA, rowB) => {
                                if(!isNaN(rowA.cells[column].innerHTML) && !isNaN(rowB.cells[column].innerHTML))
                                    return Number(rowA.cells[column].innerHTML) >= Number(rowB.cells[column].innerHTML) ? direction : 0-direction;
                                else
                                    return rowA.cells[column].innerHTML >= rowB.cells[column].innerHTML ? direction : 0-direction;
                              }));
}
tableHeader.forEach(el => {
    const td = document.createElement("td");
    td.innerHTML = el.name;
    td.addEventListener('click', () => sortTable(el.value));
    table_head.append(td);
});

const swapi = {
    getFilms(callback, errorCallback) {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(callback)
        .catch(errorCallback)
    },
    anotherPage(callback, errorCallback, link){
        fetch(link)
        .then(response => response.json())
        .then(callback)
        .catch(errorCallback)
   }
}

function printApiPeople (obj){
    console.log(obj);
    table_body.innerHTML = "";
    obj.results.forEach(person => {
        const tr = document.createElement("tr");
        tr.innerHTML = "<td>"+person.name+"</td><td>"+person.gender+"</td><td>"+person.height+"</td><td>"+person.mass+"</td>";
        table_body.append(tr);
    });
    table_nav.innerHTML = "";
    if(obj.previous !== null)
    {
        const li_previous = document.createElement("li");
        li_previous.innerHTML = "Преведущая страница";
        li_previous.addEventListener('click', () => swapi.anotherPage(printApiPeople, console.error, obj.previous));
        table_nav.append(li_previous);
    }
    if(obj.next !== null)
    {
        const li_next = document.createElement("li");
        li_next.innerHTML = "Следующая страница";
        li_next.addEventListener('click', () => swapi.anotherPage(printApiPeople, console.error, obj.next));
        table_nav.append(li_next);
    }
}

swapi.getFilms(printApiPeople, console.error);