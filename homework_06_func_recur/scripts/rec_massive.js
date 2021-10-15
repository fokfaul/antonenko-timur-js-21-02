function findAllArrayToObject (obj){
    const outObj = {};
    if(Array.isArray(obj))
    {
        if(obj.length == 2 && typeof obj[0] === 'string')
        {
            if(typeof obj[1] === 'object')
                outObj[obj[0]] = findAllArrayToObject(obj[1]);
            else
                outObj[obj[0]] = obj[1];
        }
        else
        {
            const outArray = [];
            for(let key in obj)
                if(typeof obj[key] === 'object')
                    outArray.push(findAllArrayToObject(obj[key]));
                else
                    outArray.push(obj[key]);
            return outArray;
        }
    }
    else
        for(let key in obj)
            if(typeof obj[key] === 'object')
                outObj[key] = findAllArrayToObject(obj[key]);
            else
                outObj[key] = obj[key];
    return outObj;
}

const testArray = [
    ["name", "Anna"],
    ["age", 22],
    ["pets",
        [
            ["dog", "Faust"],
            ["cat", "Balthazar"]
        ]
    ],
    {
        "lvl2_1": 12,
        "lvl2_2": [["mass_2_1", "lvl2"], ["mass_2_2", "lvl2"], ["no_mass", "lvl2_1", "lvl2_2"]],
        "lvl2_3": {
            "lvl3": ["mass_3", "lvl3"]
        }
    }
];

console.log(findAllArrayToObject(testArray));