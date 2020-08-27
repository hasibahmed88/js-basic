


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]

let len = (array.length)/2


for(let i=0; i<len; i++ ){
    
    let temp = array[i]
    array[i] = array[array.length -1 - i]
    array[array.length - 1 - i] = temp

}


console.log(array)





