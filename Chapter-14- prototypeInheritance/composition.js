
function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function(){
        console.log("I cal walk")
    }
}

var canEat = {
    eat: function(){
        console.log("I can eat")
    }
}

var canSwim = {
    swim: function(){
        console.log("I can swim");
    }
}

// var person = Object.assign({}, canWalk, canEat )
// person.name = "Hasib Ahmed";

function Person(name){
    this.name = name
}
mixin(Person.prototype, canWalk,canEat)

var person = new Person("Hasib Ahmed")
console.log(person)


function GoldFish(name){
    this.name = name
}

mixin(GoldFish.prototype, canEat,canSwim)

var fish = new GoldFish("Gold Fish")

console.log(fish)