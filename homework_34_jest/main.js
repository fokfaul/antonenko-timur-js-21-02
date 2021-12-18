function equalStr(str){
    if (typeof str === "string" || str instanceof String)
    {
        const arStr = str.split(',',2);
        if(arStr.length>=2)
            return (arStr[0].toLowerCase().indexOf(arStr[1].toLowerCase()) >= 0);
        else
            return false;
    }
    else
        return false;
}

function truncate(str, maxlength) {
  if (typeof str === "string" || str instanceof String)
    if(Number.isInteger(maxlength))
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;
    else
        return "Не получено число";
  else
    return "Не получена строка";
}

function reformatDate(date){
    if(/^\d{2}\/\d{2}\/\d{4} \d{2}-\d{2}$/.test(date))
        return date.replace(new RegExp("/",'g'),'.').replace(/-/,':')
    else
        return "Неверный формат даты";
}

function regName(str){
    return (/^[А-Яа-я]+ [А-Яа-я]+( ([А-Яа-я]+вич)| ([А-Яа-я]+вна))*$/.test(str))
}

function camelToSnake(str) {
    if (typeof str === "string" || str instanceof String)
        return str.replace(/[A-Za-zА-Яа-я0-9_]([A-ZА-Я])/g, (m) => m[0] + "_" + m[1]).toLowerCase();
    else
        return "Получена не строка";
}

function findCommentsHtml(html){
    if (typeof html === "string" || html instanceof String)
        return html.match(/<!--.*?-->/gs);
    else
        return "Получена не строка";
}

function findNumbers(text){
    if (typeof text === "string" || text instanceof String)
        return text.match(/\d+(\.\d+)?/g);
    else
        return "Получена не строка";
}

function RightIdDoc(id){
    const idReg_one = /^[A-Za-z0-9]{16}$/;
    const idReg_two = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
    return (idReg_one.test(id) && id.length == 16) || (idReg_two.test(id) && id.length == 19);
}

function tryEnterId(id, callback){
    if(RightIdDoc(id))
    {
        alert("Ведётся поиск");
        console.log("accept id");
    }
    else
    {
        alert("неверный индентификатор");
        console.log("wrong id");
        RightIdDoc(callback(), callback);
    }
    return;
}

//Вызов функций для html-страницы
function documentReady(){
    const firstStr = prompt("1. Введите две строки через запяту.");
    alert("1. "+equalStr(firstStr));

    const secondStr = prompt("2. Введите строку.");
    const secondNum = prompt("2. Введите число.");
    alert("2. "+truncate(secondStr, secondNum));

    const thirdStr = prompt("3. Введите дату в формате dd/mm/year hh-mm");
    alert("3. "+reformatDate(thirdStr))

    const fourthStr = prompt("4. Введите ФИО.");
    alert("4. "+regName(fourthStr));

    const fifthStr = prompt("5. Введите строку в формате СamalCase.");
    alert("5. snake_case: "+camelToSnake(fifthStr));

    const sixthText = prompt("6. Вставьте html-код.");
    alert(findCommentsHtml(sixthText));

    const seventhText = prompt("7. Введите строку.");
    alert(findNumbers(seventhText));

    const getEighthStr = () => prompt("8. Введите идентификатор документа.");
    RightIdDoc(getEighthStr(), getEighthStr);
}

//экспорт для тестирования

module.exports = {
 equalStr,
 truncate,
 reformatDate,
 regName,
 camelToSnake,
 findCommentsHtml,
 findNumbers,
 RightIdDoc
}
