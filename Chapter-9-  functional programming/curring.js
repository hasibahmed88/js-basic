// Curring


// function sum(a,b,c){
//     return a + b + c 
// }
// let result = sum(10,20,30)
// console.log(result)


function sum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

let result = sum(10)(20)(30)

console.log(result)
