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

//5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.

const fifth_inArray = [2, 4, 6, 10, 1, 3, 5, 9];
console.log(fifth_inArray.reduce((sum, current) => {return sum+current;}, 0)/fifth_inArray.length);

/*6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее
значение и методы сложения, вычитания, умножения и деления, принимающие число и манипулирующий свойством значения
в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль.*/

const Calculator = {
    current: 0,
    add: function(num){this.current += num;},
    sub: function(num){this.current -= num;},
    multi: function(num){this.current *= num;},
    div: function(num){this.current = this.current/num;},
    to_zero: function(){this.current = 0}
}

Calculator.add(7); Calculator.sub(3); Calculator.multi(4);
console.log(Calculator.current);

/*7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями
numbers, strings и objects, содержащими массив со значениями, соответствующими названию поля.*/

const seventh_inArray = [12, "aasd", 15, {asd: 12}, "fes", {as: "rest"}];
const seventh_outObject = {
    numbers: [],
    strings: [],
    objects: []
};
seventh_inArray.forEach((el) => {
    if(typeof el === 'number')
        seventh_outObject.numbers.push(el);
    if(typeof el === 'object')
        seventh_outObject.objects.push(el);
    if(typeof el === 'string')
        seventh_outObject.strings.push(el);
});
console.log(seventh_outObject);

/*8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого
массива, значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть
больше первого)*/

function filterArr(arr, a, b){
    return arr.filter((value) => {
        if((b<a && value>=b && value<=a) || (b>a && value<=b && value>=a))
            return true;
        else
            return false;
    });
}

const eighth_inArray = [1, -1, 2, 5, 10, -9, -45], inN1 = 5, inN2 = -8;
console.log(filterArr(eighth_inArray, inN1, inN2));

