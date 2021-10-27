import * as loader from '../DOM/loader'

export function Animation(){
    loader.main.classList.add("await");
    let interval = moveOnCircle();
    let t = 0;
    function moveOnCircle(){
        return requestAnimationFrame(() => {
            t+= 0.1;
            loader.l_one.style.marginLeft = ""+(-75*Math.cos(t))+"px";
            loader.l_one.style.marginTop = ""+(-75*Math.sin(t))+"px";
            loader.l_two.style.marginLeft = ""+(75*Math.cos(t))+"px";
            loader.l_two.style.marginTop = ""+(75*Math.sin(t))+"px";
            interval = requestAnimationFrame(moveOnCircle);
        })
    }
    return () => {
        loader.l_one.style.marginLeft = "";
        loader.l_one.style.marginTop = "";
        loader.l_two.style.marginLeft = "";
        loader.l_two.style.marginTop = "";
        loader.main.remove("await");
        cancelAnimationFrame(interval);
    };
}