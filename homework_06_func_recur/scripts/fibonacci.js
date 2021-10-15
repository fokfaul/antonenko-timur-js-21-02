const getFact = (() => {
    const cash = [0,1];
    return (a) => {
        if(a > cash.length - 1)
        {
            cash[cash.length] = cash[cash.length-1] + cash[cash.length-2];
//            console.log("Запись в кэш");
            return getFact(a);
        }
        console.log(cash);
        return cash[a];
    }
})();

console.log(getFact(4));
console.log(getFact(6));
console.log(getFact(10));
console.log(getFact(5));
console.log(getFact(7));