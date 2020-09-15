
var Rectangle = function(width, height){
    
    this.width = width
    this.height = height
    var position = {
        x: 50,
        y: -20
    }

   var prop = function (){
        console.log("My width is " + this.width)
        console.log("MY height is " + this.height)
    }.bind(this)

    this.draw = function(){
        console.log("I'm rectangle.")
        prop()
        console.log("Position: X = " + position.x + ' & ' + 'Y = ' + position.y)
    }

   Object.defineProperty(this,'position',{
       // Getter
       get: function(){
           return position
       },

       // Setter
       set: function(value){
            position = value
       }
   })

}


var rect = new Rectangle(10,20)
rect.draw()

// setter
rect.position = {
    x: 150,
    y: -100
}

// getter
console.log(rect.position)


