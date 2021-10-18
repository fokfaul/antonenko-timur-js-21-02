class classAnimal{
    constructor(){this._name = "этот";}
    get name(){return this._name;}
    rename(name){this._name = name;}
    say(){return "неизвестное животное молчит";}
    eat(){return this._name+" ест";}
}

class classCat extends classAnimal{
    say(){return "кот мяукает";}
    hunt(){return this.name+" охотится";}
}

class classDog extends classAnimal{
    say(){return "собака лает";}
}

class classParrot extends classAnimal{
    say(){return this._name+" умный";}
}

const cat_c = new classCat();
const dog_c = new classDog();
const parrot_c = new classParrot();

console.log("--> Проверка классов");
console.log(dog_c.say());
parrot_c.rename("Кеша");
console.log(parrot_c.say());
console.log(cat_c.name);
console.log(cat_c.say());
console.log(cat_c.hunt());
cat_c.rename("Барсик");
console.log(cat_c.hunt());
console.log(cat_c.eat());
for(key in cat_c)
    console.log(key);