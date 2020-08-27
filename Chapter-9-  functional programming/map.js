
// let arr = [4,16,25]

// let Arr = arr.map(function(value){
//     return value + 1
// })
// console.log(arr)
// console.log(Arr)


let arr = [1,2,3,4,5]


function myMap(array,cb){

    let newArr = []
    for(let i = 0; i<array.length; i++ ){
        let temp = cb(array[i], i, array)

        newArr.push(temp)
    }
    return newArr
}

let result = myMap(arr,function(value){
    return value * value * value
})

console.log(result)

let result2 = myMap(arr,function(value){
    return value * 10
})

console.log(result2)

