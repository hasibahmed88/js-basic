
// let createRect = function(wid, heig){
//     return {
//         width: wid,
//         height: heig,
    
//         draw: function(){
//             console.log("I'm a draw function")
//             this.property()
//             console.log(this)
//         },
//         property: function(){
//             console.log("My width is "+ this.width)
//             console.log("My height is "+ this.height)
//         }
//     }
// }

// let rect1 = createRect(100,50)
// rect1.property()

// let rect2 = createRect(50,25)
// rect2.property()


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

let rect = new Rectangle(80,40)
rect.draw()
