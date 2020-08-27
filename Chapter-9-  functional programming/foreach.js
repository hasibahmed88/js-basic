

// let array = [10,20,30,40,50]

// let sum = 0

// array.forEach(function(item,index,arr){
//    console.log(index + ': '+ item) 
//    sum+= item
// })


// console.log('Total : '+sum)


let array = [10,20,30,40,50]

function forEach(arr,func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i],i, arr)
    }
}

let sum = 0
forEach(array,function(item,index,arr){
    sum += item + 5
})


forEach(array,function(value,index,arr){
    arr[index] = value + 5
})


console.log(array)