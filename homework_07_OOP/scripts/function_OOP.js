function Animal(){}
Object.defineProperties(Animal.prototype, {
    name: {value: "этот", writable:true, enumerable: true},
    eat: {value: function(){
        return this.name+" ест";
    }, writable:true},
    say: {value: function(){
        return "неизвестное животное молчит";
    }, writable:true},
    rename: {value: function(name){
        if(/^[А-Яа-я -]*$/.test(name))
            this.name = name;
        else
            console.log("Кличка введена неверно. Новая кличка должна содержать только кирилические символы, пробелы или символ '-'.")
    }, writable:true}
});

function Cat(){}
Cat.prototype = Object.create(Animal.prototype);
Object.defineProperties(Cat.prototype, {
    hunt: {value: function(){
        return this.name+" охотится";
    }, writable:true},
    say: {value: function(){
        return "кот мяукает";
    }, writable:true}
});

function Dog(){}
Dog.prototype = Object.create(Animal.prototype);
Object.defineProperties(Dog.prototype, {
    say: {value: function(){
        return "собака лает";
    }, writable:true}
});

function Parrot(){}
Parrot.prototype = Object.create(Animal.prototype);
Object.defineProperties(Parrot.prototype, {
    say: {value: function(){
        return this.name+" умный";
    }, writable:true}
});

const cat_f = new Cat();
const dog_f = new Dog();
const parrot_f = new Parrot();

console.log("--> Проверка функций");
console.log(dog_f.say());
parrot_f.rename("Kesha");
parrot_f.rename("Кеша");
console.log(parrot_f.say());
console.log(cat_f.name);
console.log(cat_f.say());
console.log(cat_f.hunt());
cat_f.rename("Барсик");
console.log(cat_f.hunt());
console.log(cat_f.eat());
for(key in cat_f)
    console.log(key);
