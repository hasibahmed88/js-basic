

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

// let myarr = arr.filter(function(value){
//     return value < 10
// })
// console.log(myarr)


function filter(array,cb){

    let newArr = []

    for(let i = 0; i < array.length; i++){
        if(cb(array[i], i, array)){
            let temp = array[i]
            newArr.push(temp)
        }
    }
    return newArr
}

let result = filter(arr,function(value){
    return value < 10
})

console.log(result)



