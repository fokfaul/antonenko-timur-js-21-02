const dictionary_sec = {
    0: "секунд",
    1: "секунду",
    2: "секунды",
    3: "секунды",
    4: "секунды"
}

const redirect_time = 10000;

let redirectTimeout  = setTimeout(function tick(time) {
    if((time/1000)%10 >= 1 && (time/1000)%10 <= 4 && (time/1000 < 10 || time/1000 > 20))
        document.getElementById('redirectInfoId').innerHTML = "Переход на maxim.life произойдет через "+(time/1000)+" "+dictionary_sec[(time/1000)%10];
    else
        document.getElementById('redirectInfoId').innerHTML = "Переход на maxim.life произойдет через "+(time/1000)+" "+dictionary_sec[0];
    if(time <= 0)
        document.location = "https://maxima.life";
    else
        recursiveTimeout = setTimeout(tick, 1000, time - 1000)
}, 1000, redirect_time);

