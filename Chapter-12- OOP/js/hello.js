
// var createRect = function(width,height){
//     return {
//         width: width,
//         height: height,
        
//         draw: function(){
//             console.log("I am draw function!")
//             this.printProp()
//             console.log(this)
//         },
    
//         printProp: function(){
//             console.log('My width is '+ this.width)
//             console.log("My height is "+ this.height)
//         }
//     }
    
// }

// var rect1 = createRect(10,20)
// rect1.draw()

// var rect2 = createRect(30,40)
// rect2.draw()


// function Rectangle(width,height){
//     this.width = width
//     this.height = height
    
//     this.draw = function(){
//         console.log("I am draw function!")
//         this.printProp()
//         console.log(this)
//     }

//    this.printProp = function(){
//         console.log('My width is '+ this.width)
//         console.log("My height is "+ this.height)
//     }

// }

// var rect1 = new Rectangle(10,20)

// rect1.draw()
 
function hello(name){
    console.log(this)
    console.log(this.a + this.b)
    console.log("My name is " + name)
}


hello.call({a: 10, b: 20},'Hasib Ahmed')
hello.apply({a: 10, b: 20},['Hasib Ahmed'])
// hello()


var result = hello.bind({a: 10, b: 40})

console.log(result('Hasib Ahmed'))