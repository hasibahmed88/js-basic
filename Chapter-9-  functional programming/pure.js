
// What is Pure Function?

    // `* It Returns the same result if given the same arguments `
    // '* It does not cause any observable side effects'


function sqr(n){
    return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

console.log("=====\n")

// Changes the value of n

var n = 10
function change(){
    n = 50
}

change()
console.log(n)

console.log("=====\n")

var point = {
    x: 45,
    y: 30
}

function changePoint(point){
    point.x = 90
    point.y = 180
}

changePoint(point)

console.log(point.x)
console.log(point.y)



