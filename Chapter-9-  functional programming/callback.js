

function sample(a,b,cb){
    let c = a + b  // 8
    let d = a - b  // -2

    return cb(c,d)
}
//=================

function sum(a,b){
    return a + b
}

let result1 = sample(3,5, function(x,y){
    return x-y
})
console.log(result1)


let result2 = sample(3,5, function(x,y){
    return x * y
})
console.log(result2)

let result3 = sample(3,5,function(x,y){
    return x / y
})
console.log(result3)


