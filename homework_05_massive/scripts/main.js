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
console.log(second_inArray);