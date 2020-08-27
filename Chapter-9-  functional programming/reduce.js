


let arr = [1,2,45,3,4,5]

// let sum = arr.reduce(function(prev,curr){
//     return prev + curr 
// },10)
// console.log(sum)

// let max = arr.reduce(function(prev,curr){
//     return Math.max(prev,curr)
// })

// console.log(max)


function reduce(array,cb,acc){

    for(let i = 0; i < array.length; i++){
        acc = cb(acc, array[i])
    }
    return acc 
}

let sum = reduce(arr, function(prev,curr){
    return prev + curr
},0)

console.log(sum)


let max = reduce(arr, function(prev,curr){
    return Math.max(prev,curr)
},0)
console.log(max)


let min = reduce(arr, function(prev,curr){
    return Math.min(prev,curr)
},arr[0])
console.log(min)

