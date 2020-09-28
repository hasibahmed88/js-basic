
// var person = {
//     name: 'Hasib Ahmed',
// }

// console.log(person)

// for(var i in person){
//     console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person,'age')
// console.log(descriptor)

// var baseObj = Object.getPrototypeOf(person)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj,'toString')
// console.log(descriptor) 


// Object.defineProperty(person,'name',{
//     enumerable: false,
//     writable: false,
//     configurable:false,
// })


// Constructor prototype object   ===================================

// function Person(name){
//     this.name = name
// }

// Person.prototype.PI = 3.1416

// var p1 = new Person("Hasib Ahmed")
// var p2 = new Person("Hasib")

// // console.log(Object.getPrototypeOf(p1))
// // console.log(Person.prototype)

// console.log(p1)
// console.log(p2)

// function Person (name){
//     this.name = name
// }

// Person.prototype.Pi = 3.1416

// var p1 = new Person("Hasib Ahmed")
// var p2 = new Person("Hasib")
// // console.log(Person.prototype)
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)



// Set method on object with prototype ===============

// Object.prototype.myMethod = function(){}
// obj


// Instance vs prototype Members =======================================

function Square (width) {
    this.width = width
    this.getWidth = function(){
        console.log('width is = '+this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function(){
        this.getWidth()
        console.log("Draw");
    },
    toString: function(){
        return "My width is  " + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.log(sqr1.hasOwnProperty('getWidth'));


// To get own property or keys =========
// console.log(Object.keys(sqr1))

// To get all property.================
// for(var i in sqr1){
//     console.log(i)
// }






