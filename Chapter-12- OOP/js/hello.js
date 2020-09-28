// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log("I'm a rectangle!");
//         this.printProp()
//     },
//     printProp: function(){
//         console.log("My width is "+ this.width)
//         console.log("My height is "+ this.height)
//     }
// }

// rect.draw()
// rect.height = 500

// rect.draw()

// function myFun(){
//     console.log(this)
//     rect.printProp()
// }
// new myFun()

// var another = {
//     width: 200,
//     height: 100,

//     hello: rect.printProp
// }

// another.hello()

// Factory pattern && Constructor pattern

// Factory Pattern =====!
var createRect = function(width,height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log("I'm a rectangle!");
            this.printProp()
        },
        printProp: function(){
            console.log("My width is "+ this.width)
            console.log("My height is "+ this.height)
        }
    }
}

// var rect1 = createRect(20,10)
// rect1.draw()

var rect2 = createRect(40,30)
rect2.draw()


var Rectangle = function(width,height){
    this.width =  width
    this.height = height

    this.draw = function(){
        console.log("I'm a rectangle!");
        this.printProp()
    }
    this.printProp = function(){
        console.log("My width is "+ this.width)
        console.log("My height is "+ this.height)
    }
}

var rect3 = new Rectangle(60,50)
rect3.draw()


var str = new String("Hello")
console.log(str.constructor)


