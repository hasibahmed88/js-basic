
// Pass by value

var x = 10
function myFun(n){
    n = n + 50
    console.log(n)
}

myFun(x)

console.log(x)


// Pass by referance

var obj = {
    a: 10,
    b: 20
}

function change(object){
    object.a = object.a + 100 
    object.b = object.b + 100 

    console.log(object)
}

change(obj)
console.log(obj)

