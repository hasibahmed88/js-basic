
var createRect = function(w,h){
    return {
        width: w,
        height: h,
    
        draw: function(){
            console.log("I'm rectangle.")
            this.prop()
            console.log(this)
        },
        prop: function(){
            console.log("My width is " + this.width)
            console.log("My height is " + this.height)
        } 
    }
}

var rect1 = createRect(100,50)
rect1.draw()

var rect2 = createRect(50,25)
rect2.draw()


// Create a calculator

var calculator = function(num1, num2){
    return {
        number1: num1,
        number2: num2,

        sum: function(){
            console.log( this.number1 + this.number2 )
        },
        sub: function(){
            console.log( this.number1 - this.number2 )
        },
        mul: function(){
            console.log( this.number1 * this.number2 )
        },
        div: function(){
            console.log( this.number1 / this.number2 )
        },
    }
}

var calc = calculator(10,20)

calc.sum()

