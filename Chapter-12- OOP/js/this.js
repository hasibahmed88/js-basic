
var rect = {
    width: 100,
    height: 50,

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

rect.draw()

function myFun(){
    // console.log(this)
    rect.prop()
}
myFun()

var another = {
    width: 50,
    height: 25,

    print: rect.prop
}
console.log(another.print)
another.print()



