
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

/*

console.log(Object.keys(obj))

console.log(Object.values(obj))

console.log(Object.entries(obj))

*/

// let obj2 = obj

// obj2.e = 150

// console.log(obj)
// console.log(obj2)


let obj2 = Object.assign({}, obj)

obj2.a = 500

console.log(obj)
console.log(obj2)





