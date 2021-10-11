/*const firstStr = prompt("1. Введите две строки через запяту.").split(',',2);
alert("1. "+(firstStr[0].toLowerCase()===firstStr[1].toLowerCase()));*/

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
const secondStr = prompt("2. Введите строку.");
const secondNum = prompt("2. Введите число.");
alert("2. "+truncate(secondStr, secondNum));