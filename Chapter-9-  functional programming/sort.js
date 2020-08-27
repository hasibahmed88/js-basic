
let person = [
    {
        name: 'B',
        age: 24
    },
    {
        name: 'A',
        age: 20
    },
    {
        name: 'D',
        age: 29
    },
    {
        name: 'C',
        age: 18
    }
]

let arr = [5,2,4,3,1,8,0,2,9,7,6,4,8,-3]

arr.sort(function(a,b){
    if(a>b){
        return -1
    }
    else if (a<b){
        return 1
    }
    else{
        return 0
    }
})

console.log(arr)


person.sort(function(a,b){
    if(a.name > b.name){
        return 1
    }
    else if(a.name < b.name){
        return -1
    }
    else{
        return 0
    }
})


console.log(person)

console.log('==========\n')


// let result = arr.every(function(value){
//     return value >= 0
// })
// console.log(result)


//  every method ===========================

let array = [2,4,6]

function every(arr,cb){
    let result
    for(let i = 0; i < arr.length; i++){
        
        if(cb(arr[i])){
            result = true
            continue
        }
        else{
            result = false
            break
        }
    }
    return result
}

let r = every(array,function(value){
    return value % 2 == 0
})

console.log(r)



//  some method ===========================

let someArr = [10,20,60,30,30,40]

function some(array, cb){
    let result
    for(let i = 0; i < array.length; i++){
        if(cb(array[i])){
            result = true
            break
        }
        else{
            result = false
            continue
        }
    }
    return result
}

let res = some(someArr, function(value){
    return value %2 == 1
})

console.log(res)


