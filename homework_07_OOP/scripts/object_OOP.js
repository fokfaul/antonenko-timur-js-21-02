const animal = { };
Object.defineProperties(animal, {
    name: {value: "этот", writable:true, enumerable: true},
    eat: {value: function(){
        return this.name+" ест";
    }, writable:true},
    say: {value: function(){
        return "неизвестное животное молчит";
    }, writable:true},
    rename: {value: function(name){
        this.name = name;
    }, writable:true}
});

const cat = {
    __proto__: animal
};
Object.defineProperty(cat, "__proto__",{enumerable: false, writable:false, configurable: false});
Object.defineProperties(cat, {
    hunt: {value: function(){
        return this.name+" охотится";
    }, writable:true},
    say: {value: function(){
        return "кот мяукает";
    }, writable:true}
});

console.log("--> Проверка объектов");
console.log(cat.name);
console.log(cat.say());
console.log(cat.hunt());
cat.rename("Барсик");
console.log(cat.hunt());
console.log(cat.eat());
for(key in animal)
    console.log(key);
for(key in cat)
    console.log(key);

const dog = {
    __proto__: animal
};
Object.defineProperty(dog, "__proto__",{enumerable: false, writable:false, configurable: false});
Object.defineProperties(dog, {
    say: {value: function(){
        return "собака лает";
    }, writable:true}
});

const parrot = {
    __proto__: animal
};
Object.defineProperty(parrot, "__proto__",{enumerable: false, writable:false, configurable: false});
Object.defineProperties(parrot, {
    say: {value: function(){
        return this.name+" умный";
    }, writable:true}
});

console.log(dog.say());
parrot.rename("Кеша");
console.log(parrot.say());
