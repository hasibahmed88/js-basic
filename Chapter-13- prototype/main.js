// Inharitance

// function Person(name){
//     this.name = name 
// }

// Person.prototype.PI = 3.1416

// var p1 = new Person("Hasib Ahmed")
// var p2 = new Person("Hasib")
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)
// console.log(p2)


function Square (width){
    this.width = width
    this.getWidth = function(){
        console.log("Width is " + this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function(){
        this.getWidth()
        console.log("Draw")
    },
    toString: function(){
        console.log("My width is " + this.width )
    }
}

sqr1 = new Square(10)
sqr2 = new Square(5)


// console.log(Object.keys(sqr1))

// for(i in sqr1){
//     console.log(i)
// }

