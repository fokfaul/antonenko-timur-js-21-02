/*
// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.
 const first_inArray = [1, 2, 5, 6, 11, 5, '1', '1'];
 console.log(first_inArray.filter((value, index, arr) => {return arr.indexOf(value) === index}));

 // 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.
const second_inArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i=0,j; i*2<second_inArray.length; i++)
{
    j=second_inArray[i];
    second_inArray[i] = second_inArray[second_inArray.length-1-i];
    second_inArray[second_inArray.length-1-i] = j;
}
console.log(second_inArray);*/

/* 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект,
где ключами являются нулевой индекс вложенных массивов, а значениями являются элементы с индексом один.*/

const third_inArray = [["one", 2], ["two", 4], ["three", 6], ["four", 8]];
const third_outObject = {};
third_inArray.forEach((arr) => third_outObject[arr[0]] = arr[1]);
console.log(third_outObject);

// 4. На вход поступает объект, вывести сумму числовых свойств объекта.

const fourth_inObject = {
    one: 1,
    two: 2,
    str: "23",
    collect: {
        name: "col",
        number: 20,
        add: {
            lvl3: 15
        }
    }
};

function sumValue(obj){
    let sum = 0;
    for(key in obj)
    {
        if(typeof obj[key] === 'number')
            sum += obj[key];
        if(typeof obj[key] === 'object')
            sum += sumValue(obj[key]);
    }
    return sum;
}

console.log(sumValue(fourth_inObject));