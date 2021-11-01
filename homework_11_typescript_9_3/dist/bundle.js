(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printApiPeople = void 0;
var swapi_1 = require("./swapi");
function printApiPeople(obj, tableBody, tableNav) {
    tableBody.innerHTML = "";
    obj.results.forEach(function (person) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + person.name + "</td><td>" + person.gender + "</td><td>" + person.height + "</td><td>" + person.mass + "</td>";
        tableBody.append(tr);
    });
    tableNav.innerHTML = "";
    if (obj.previous !== null) {
        var li_previous = document.createElement("li");
        li_previous.innerHTML = "Преведущая страница";
        li_previous.addEventListener('click', function () { return swapi_1.swapi.anotherPage(printApiPeople, console.error, obj.previous, tableBody, tableNav); });
        tableNav.append(li_previous);
    }
    if (obj.next !== null) {
        var li_next = document.createElement("li");
        li_next.innerHTML = "Следующая страница";
        li_next.addEventListener('click', function () { return swapi_1.swapi.anotherPage(printApiPeople, console.error, obj.next, tableBody, tableNav); });
        tableNav.append(li_next);
    }
}
exports.printApiPeople = printApiPeople;
},{"./swapi":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapi = void 0;
exports.swapi = {
    getFilms: function (callback, errorCallback, tableBody, tableNav) {
        fetch('https://swapi.dev/api/people/')
            .then(function (response) { return response.json(); })
            .then(function (response) { return callback(response, tableBody, tableNav); })
            .catch(errorCallback);
    },
    anotherPage: function (callback, errorCallback, link, tableBody, tableNav) {
        fetch(link)
            .then(function (response) { return response.json(); })
            .then(function (response) { return callback(response, tableBody, tableNav); })
            .catch(errorCallback);
    }
};
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableHeader = void 0;
exports.tableHeader = [{ name: "Имя", value: 0 }, { name: "Пол", value: 1 }, { name: "Рост", value: 2 }, { name: "Вес", value: 3 }];
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstElementBySelector = exports.getElementById = void 0;
function getElementById(id) {
    return document.getElementById(id);
}
exports.getElementById = getElementById;
function getFirstElementBySelector(element, selector) {
    return element.querySelectorAll(selector)[0];
}
exports.getFirstElementBySelector = getFirstElementBySelector;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableInitialisation = exports.table_nav = exports.table_head = exports.table_body = void 0;
var DOM_manipulation_1 = require("./DOM_manipulation");
var printApi_1 = require("../API/printApi");
var swapi_1 = require("../API/swapi");
exports.table_body = (0, DOM_manipulation_1.getElementById)("tablePersonId").tBodies[0];
exports.table_head = (0, DOM_manipulation_1.getElementById)("tablePersonId").tHead;
exports.table_nav = (0, DOM_manipulation_1.getElementById)("tableNavigationId");
function tdEvent(column, direction) {
    this.sortTable = function () {
        exports.table_body.append.apply(exports.table_body, Array.from(exports.table_body.rows)
            .sort(function (rowA, rowB) {
            if (!isNaN(rowA.cells[column].innerHTML) && !isNaN(rowB.cells[column].innerHTML))
                return Number(rowA.cells[column].innerHTML) >= Number(rowB.cells[column].innerHTML) ? direction : 0 - direction;
            else
                return rowA.cells[column].innerHTML >= rowB.cells[column].innerHTML ? direction : 0 - direction;
        }));
        direction = 0 - direction;
    };
}
function tableInitialisation(tableHeader) {
    tableHeader.forEach(function (el) {
        var td = document.createElement("td");
        var td_func = new tdEvent(el.value, 1);
        td.innerHTML = el.name;
        td.addEventListener('click', function () { return td_func.sortTable(); });
        exports.table_head.append(td);
    });
    swapi_1.swapi.getFilms(printApi_1.printApiPeople, console.error, exports.table_body, exports.table_nav);
}
exports.tableInitialisation = tableInitialisation;
},{"../API/printApi":1,"../API/swapi":2,"./DOM_manipulation":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_1 = require("./DOM/table");
var table_header_1 = require("./API/table-header");
(0, table_1.tableInitialisation)(table_header_1.tableHeader);
},{"./API/table-header":3,"./DOM/table":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQVBJL3ByaW50QXBpLnRzIiwic3JjL0FQSS9zd2FwaS50cyIsInNyYy9BUEkvdGFibGUtaGVhZGVyLnRzIiwic3JjL0RPTS9ET01fbWFuaXB1bGF0aW9uLnRzIiwic3JjL0RPTS90YWJsZS50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQ0EsaUNBQTZCO0FBRzdCLFNBQWdCLGNBQWMsQ0FBRSxHQUFRLEVBQUUsU0FBc0IsRUFBRSxRQUFxQjtJQUNuRixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN6QixHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07UUFDdkIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBQyxNQUFNLENBQUMsSUFBSSxHQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxNQUFNLENBQUMsSUFBSSxHQUFDLE9BQU8sQ0FBQztRQUN0SCxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsSUFBRyxHQUFHLENBQUMsUUFBUSxLQUFLLElBQUksRUFDeEI7UUFDRyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELFdBQVcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7UUFDOUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFNLE9BQUEsYUFBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFD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LENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUN2QixFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN4RCxrQkFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNILGFBQUssQ0FBQyxRQUFRLENBQUMseUJBQWMsRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLGtCQUFVLEVBQUUsaUJBQVMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFURCxrREFTQzs7OztBQy9CRCxxQ0FBK0M7QUFDL0MsbURBQThDO0FBRTlDLElBQUEsMkJBQW1CLEVBQUMsMEJBQVcsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHt0YWJsZV9ib2R5LCB0YWJsZV9oZWFkLCB0YWJsZV9uYXZ9IGZyb20gJy4uL0RPTS90YWJsZSdcclxuaW1wb3J0IHtzd2FwaX0gZnJvbSAnLi9zd2FwaSdcclxuaW1wb3J0IHtBcGl9IGZyb20gJy4uL2ludGVyZmFjZS9wZW9wbGUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRBcGlQZW9wbGUgKG9iajogQXBpLCB0YWJsZUJvZHk6IEhUTUxFbGVtZW50LCB0YWJsZU5hdjogSFRNTEVsZW1lbnQpOiB2b2lke1xyXG4gICAgdGFibGVCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBvYmoucmVzdWx0cy5mb3JFYWNoKHBlcnNvbiA9PiB7XHJcbiAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgIHRyLmlubmVySFRNTCA9IFwiPHRkPlwiK3BlcnNvbi5uYW1lK1wiPC90ZD48dGQ+XCIrcGVyc29uLmdlbmRlcitcIjwvdGQ+PHRkPlwiK3BlcnNvbi5oZWlnaHQrXCI8L3RkPjx0ZD5cIitwZXJzb24ubWFzcytcIjwvdGQ+XCI7XHJcbiAgICAgICB0YWJsZUJvZHkuYXBwZW5kKHRyKTtcclxuICAgIH0pO1xyXG4gICAgdGFibGVOYXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmKG9iai5wcmV2aW91cyAhPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgIGNvbnN0IGxpX3ByZXZpb3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgbGlfcHJldmlvdXMuaW5uZXJIVE1MID0gXCLQn9GA0LXQstC10LTRg9GJ0LDRjyDRgdGC0YDQsNC90LjRhtCwXCI7XHJcbiAgICAgICBsaV9wcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3YXBpLmFub3RoZXJQYWdlKHByaW50QXBpUGVvcGxlLCBjb25zb2xlLmVycm9yLCBvYmoucHJldmlvdXMsIHRhYmxlQm9keSwgdGFibGVOYXYpKTtcclxuICAgICAgIHRhYmxlTmF2LmFwcGVuZChsaV9wcmV2aW91cyk7XHJcbiAgICB9XHJcbiAgICBpZihvYmoubmV4dCAhPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgIGNvbnN0IGxpX25leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICBsaV9uZXh0LmlubmVySFRNTCA9IFwi0KHQu9C10LTRg9GO0YnQsNGPINGB0YLRgNCw0L3QuNGG0LBcIjtcclxuICAgICAgIGxpX25leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzd2FwaS5hbm90aGVyUGFnZShwcmludEFwaVBlb3BsZSwgY29uc29sZS5lcnJvciwgb2JqLm5leHQsIHRhYmxlQm9keSwgdGFibGVOYXYpKTtcclxuICAgICAgIHRhYmxlTmF2LmFwcGVuZChsaV9uZXh0KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBzd2FwaSA9IHtcclxuICAgIGdldEZpbG1zKGNhbGxiYWNrOiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjazogRnVuY3Rpb24sIHRhYmxlQm9keTogSFRNTEVsZW1lbnQsIHRhYmxlTmF2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N3YXBpLmRldi9hcGkvcGVvcGxlLycpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNhbGxiYWNrKHJlc3BvbnNlLCB0YWJsZUJvZHksIHRhYmxlTmF2KSlcclxuICAgICAgICAuY2F0Y2goZXJyb3JDYWxsYmFjaylcclxuICAgIH0sXHJcbiAgICBhbm90aGVyUGFnZShjYWxsYmFjazogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s6IEZ1bmN0aW9uLCBsaW5rOiBzdHJpbmcsIHRhYmxlQm9keTogSFRNTEVsZW1lbnQsIHRhYmxlTmF2OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgICAgZmV0Y2gobGluaylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY2FsbGJhY2socmVzcG9uc2UsIHRhYmxlQm9keSwgdGFibGVOYXYpKVxyXG4gICAgICAgIC5jYXRjaChlcnJvckNhbGxiYWNrKVxyXG4gICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFRhYmxlSGVhZENvbHVtbntcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRhYmxlSGVhZGVyOiBBcnJheTxUYWJsZUhlYWRDb2x1bW4+ID0gW3tuYW1lOlwi0JjQvNGPXCIsdmFsdWU6MH0se25hbWU6XCLQn9C+0LtcIix2YWx1ZToxfSx7bmFtZTpcItCg0L7RgdGCXCIsdmFsdWU6Mn0se25hbWU6XCLQktC10YFcIix2YWx1ZTozfV07IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudHtcclxuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RWxlbWVudEJ5U2VsZWN0b3IoZWxlbWVudCA6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnR7XHJcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXVxyXG59IiwiaW1wb3J0IHtnZXRFbGVtZW50QnlJZH0gZnJvbSAnLi9ET01fbWFuaXB1bGF0aW9uJ1xyXG5pbXBvcnQge3ByaW50QXBpUGVvcGxlfSBmcm9tICcuLi9BUEkvcHJpbnRBcGknXHJcbmltcG9ydCB7c3dhcGl9IGZyb20gJy4uL0FQSS9zd2FwaSdcclxuaW1wb3J0IHtUYWJsZUhlYWRDb2x1bW59IGZyb20gJy4uL0FQSS90YWJsZS1oZWFkZXInXHJcblxyXG5leHBvcnQgY29uc3QgdGFibGVfYm9keSA9IGdldEVsZW1lbnRCeUlkKFwidGFibGVQZXJzb25JZFwiKS50Qm9kaWVzWzBdO1xyXG5leHBvcnQgY29uc3QgdGFibGVfaGVhZCA9IGdldEVsZW1lbnRCeUlkKFwidGFibGVQZXJzb25JZFwiKS50SGVhZDtcclxuZXhwb3J0IGNvbnN0IHRhYmxlX25hdiA9IGdldEVsZW1lbnRCeUlkKFwidGFibGVOYXZpZ2F0aW9uSWRcIik7XHJcblxyXG5mdW5jdGlvbiB0ZEV2ZW50KGNvbHVtbjogbnVtYmVyLCBkaXJlY3Rpb246IG51bWJlcik6IHZvaWR7XHJcbiAgICB0aGlzLnNvcnRUYWJsZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFibGVfYm9keS5hcHBlbmQoLi4uQXJyYXkuZnJvbSh0YWJsZV9ib2R5LnJvd3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgocm93QSwgcm93QikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaXNOYU4ocm93QS5jZWxsc1tjb2x1bW5dLmlubmVySFRNTCkgJiYgIWlzTmFOKHJvd0IuY2VsbHNbY29sdW1uXS5pbm5lckhUTUwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihyb3dBLmNlbGxzW2NvbHVtbl0uaW5uZXJIVE1MKSA+PSBOdW1iZXIocm93Qi5jZWxsc1tjb2x1bW5dLmlubmVySFRNTCkgPyBkaXJlY3Rpb24gOiAwLWRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd0EuY2VsbHNbY29sdW1uXS5pbm5lckhUTUwgPj0gcm93Qi5jZWxsc1tjb2x1bW5dLmlubmVySFRNTCA/IGRpcmVjdGlvbiA6IDAtZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIGRpcmVjdGlvbiA9IDAgLSBkaXJlY3Rpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJsZUluaXRpYWxpc2F0aW9uKHRhYmxlSGVhZGVyOiBBcnJheTxUYWJsZUhlYWRDb2x1bW4+KTogdm9pZHtcclxuICAgIHRhYmxlSGVhZGVyLmZvckVhY2goKGVsOiBUYWJsZUhlYWRDb2x1bW4pID0+IHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjb25zdCB0ZF9mdW5jID0gbmV3IHRkRXZlbnQoZWwudmFsdWUsIDEpO1xyXG4gICAgICAgIHRkLmlubmVySFRNTCA9IGVsLm5hbWU7XHJcbiAgICAgICAgdGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0ZF9mdW5jLnNvcnRUYWJsZSgpKTtcclxuICAgICAgICB0YWJsZV9oZWFkLmFwcGVuZCh0ZCk7XHJcbiAgICB9KTtcclxuICAgIHN3YXBpLmdldEZpbG1zKHByaW50QXBpUGVvcGxlLCBjb25zb2xlLmVycm9yLCB0YWJsZV9ib2R5LCB0YWJsZV9uYXYpO1xyXG59IiwiaW1wb3J0IHt0YWJsZUluaXRpYWxpc2F0aW9ufSBmcm9tICcuL0RPTS90YWJsZSdcclxuaW1wb3J0IHt0YWJsZUhlYWRlcn0gZnJvbSAnLi9BUEkvdGFibGUtaGVhZGVyJ1xyXG5cclxudGFibGVJbml0aWFsaXNhdGlvbih0YWJsZUhlYWRlcik7Il19
