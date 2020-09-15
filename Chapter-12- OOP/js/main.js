
// Factory pattern class
let createRect = function(width, height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log("I'm a draw function")
            this.property()
            console.log(this)
        },
        property: function(){
            console.log("My width is "+ this.width)
            console.log("My height is "+ this.height)
        }
    }
}

let rect1 = createRect(100,50)
rect1.property()

let rect2 = createRect(50,25)
rect2.property()


// Constructor pattern class

let Rectangle  = function(width,height){

    this.w = width
    this.h = height
    
    this.draw = function(){
        console.log("I'm Ractengle function.")
        this.property()
    }

    this.property = function(){
        console.log("My width is "+ this.w)
        console.log("My height is "+ this.h)
    }

}

let rect3 = new Rectangle(80,40)
rect3.draw()


let str = new String("Hello")
console.log(str )



function test(){
    console.log("Something")
}

let fun = new test()


// Function method, -> name, length, call, apply, bind

console.log(test.name,test.length)

function myFun(c,d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFun.call({a:40, b:25},10,20)
myFun.apply({a:400, b:250},[10,20])
myFun.apply({})
myFun()

var testBind = myFun.bind({a: 10,b:15})

testBind(5,10)


