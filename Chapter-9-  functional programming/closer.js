

var x = 10

function a(){
    var y = 40

    return function(){
        var z = 50
        console.log(x+y+z)
    }
}

var abc = a()

console.dir(abc)

