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
Object.defineProperties(cat, {
    hunt: {value: function(){
        return this.name+" охотится";
    }, writable:true},
    say: {value: function(){
        return "кот мяукает";
    }, writable:true}
});


console.log(cat);
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
Object.defineProperties(dog, {
    say: {value: function(){
        return "собака лает";
    }, writable:true}
});

const parrot = {
    __proto__: animal
};
Object.defineProperties(parrot, {
    say: {value: function(){
        return this.name+" умный";
    }, writable:true}
});

console.log(dog.say());
parrot.rename("Кеша");
console.log(parrot.say());
