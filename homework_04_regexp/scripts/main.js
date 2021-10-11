const firstStr = prompt("1. Введите две строки через запяту.").split(',',2);
alert("1. "+(firstStr[0].toLowerCase()===firstStr[1].toLowerCase()));

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
const secondStr = prompt("2. Введите строку.");
const secondNum = prompt("2. Введите число.");
alert("2. "+truncate(secondStr, secondNum));

const thirdStr = prompt("3. Введите дату в формате dd/mm/year hh-mm");
alert("3. "+thirdStr.replace(new RegExp("/",'g'),'.').replace(/-/,':'))

const fourthStr = prompt("4. Введите ФИО.");
alert("4. "+(/^[А-Яа-я]+ [А-Яа-я]+( ([А-Яа-я]+вич)| ([А-Яа-я]+вна))*$/.test(fourthStr)));

function camelToSnake(string) {
    return string.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}
const fifthStr = prompt("5. Введите строку в формате СamalCase.");
alert("5. snake_case: "+camelToSnake(fifthStr));

const sixthText = prompt("6. Вставьте html-код.");
alert(sixthText.match(/<!--.*?-->/gs));

const seventhText = prompt("7. Введите строку.");
alert(seventhText.match(/\d+(\.\d+)?/g));

function RightIdDoc(){
    let eighthStr = prompt("8. Введите идентификатор документа.");
    eighthRegExp = /^([A-Za-z0-9]{16})|([A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4})$/
    if(eighthRegExp.test(eighthStr))
        alert("Ведётся поиск");
    else
    {
        alert("неверный индентификатор");
        RightIdDoc();
    }
    return;
}

RightIdDoc();