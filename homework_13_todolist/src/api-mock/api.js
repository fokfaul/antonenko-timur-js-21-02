export const init_toDoList = localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) :
                             [{"do": "Сделать уборку в квартире", "status": true},
                              {"do": "Помыть посуду", "status": false},
                              {"do": "Сходить в спротзал", "status": false},
                              {"do": "Оплатить тур путевки", "status": false},
                              {"do": "Купить зубную пасту", "status": false}];