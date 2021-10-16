const getFact_ver_1 = (() => {
    return (a) => {
        if(a == 0)
            return 0;
        if(a == 1)
            return 1;
        return getFact_ver_1(a-1) + getFact_ver_1(a-2);
    }
})();

console.log(getFact_ver_1(4));
console.log(getFact_ver_1(6));
console.log(getFact_ver_1(10));