

// function recursive(n){

//     if(n == 0){
//         return
//     }
//     console.log('Hi! I\'m calling.')

//     recursive(n - 1)
// }   

// recursive(10)

function hello(n){
    if(n == 1){
        return 1
    }

    return n + hello(n-1)
    
}

console.log(hello(10))







