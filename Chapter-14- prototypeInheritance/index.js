// Prototypical Inheritance

function extend(parent,child){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child 
}


// Shape =======================================
function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
    console.log("I'm common method")
}

var shape = new Shape("Brown")
// Square ======================================
function Square(width,color) {
    Shape.call(this,color)
    this.width = width
}

Square.prototype.draw = function(){
    console.log("Drawing")
}

extend(Shape, Square)

Square.prototype.common = function(){
    console.log("I'm overriding method from square");
}



// Square.prototype = {
//     test: function(){
//         console.log("Hello");
//     }
// }


var shape = new Shape();
var sqr = new Square(45,"Green")


// Circle ======================================
function Circle(radius,color){
    Shape.call(this,color)
    this.radius = radius
}

extend(Shape,Circle)

Circle.prototype.common = function(){
    // Shape.prototype.common.call()
    console.log("I'm overriding method from circle");
}
var circle = new Circle(10,"Blue")


var arr = [shape,sqr,circle];

// for(var i of arr){
//     i.common()
// }



