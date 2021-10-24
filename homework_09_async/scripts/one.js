const i = 0, j = 1000;

function toConsole(name, a, b){
    console.log("Случайное число от "+name+": "+(Math.floor(Math.random() * (b - a + 1)) + a));
}

let recursiveTimeout  = setTimeout(function tick() {
    toConsole("setTimeout", i, j);
    recursiveTimeout = setTimeout(tick, 500)
    }, 500);

 const interval = setInterval(toConsole,500, "setInterval", i, j);