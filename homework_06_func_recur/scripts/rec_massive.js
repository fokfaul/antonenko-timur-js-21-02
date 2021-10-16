function findAllArrayToObject (obj){
    const outObj = {};
    for(let key in obj)
        if(Array.isArray(obj[key]))
            if(obj[key].length == 2 && typeof obj[key][0] === 'string')
                if(typeof obj[key][1] === 'object')
                    outObj[obj[key][0]] = findAllArrayToObject(obj[key][1]);
                else
                    if(Array.isArray(obj))
                        outObj[obj[key][0]] = obj[key][1];
                    else
                    {
                        outObj[key] = {};
                        outObj[key][obj[key][0]] = obj[key][1];
                    }
            else
                outObj[key] = findAllArrayToObject(obj[key]);
        else
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
    ["strong", {
        "lvl2_1": 12,
        "lvl2_2": [["mass_2_1", "lvl2"], ["mass_2_2", "lvl2"]],
        "lvl2_3": {
            "lvl3_1": ["mass_4_1", "lvl4_1"],
            "lvl3_2": [["mass_4_2", "lvl4_2"], ["mass_4_3", "lvl4_3"]]
        }
    }],
    ["flag", true],
    ["about", {"name": "test", "ver": 1.2}]
];

console.log(findAllArrayToObject(testArray));