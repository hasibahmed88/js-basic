
let arr = [10,58,7,6,98,15,14,45,60]


// let result = arr.find(function(value){
//     return value == 15 
// })

// console.log(result)

// let index = arr.findIndex(function(value){
//     return value == 7
// })
// console.log(index)



function find(array,cb){

    for(let i = 0; i < array.length; i++){
        if(cb(array[i])){
            return array[i]
        }
    }
}

let finder = find(arr,function(value){
    return value == 45
})
console.log(finder)

function findIndex(array,cb){

    for(let i = 0; i < array.length; i++ ){
        if(cb(array[i])){
            return i
        }
    }
}

let index = findIndex(arr,function(value){
    return value == 60
})

console.log(index)


