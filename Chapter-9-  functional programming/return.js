

// function greet(message){

//     function names(name){
//         return message + ' ' + name + '!'
//     }
//     return names
// }


// let gm = greet('Good morning')
// let gn = greet('Good night')
// let ga = greet('Good afternoon')

// let nam = gm('Hasib Ahmed')

// let she = gn('To you')
// console.log(nam)
// console.log(she)


function power(p){

    function base(b){
        let result = 1
        for(let i = 0; i < p; i++){
            result *= b
        }
        return result
    }
    return base
}

let p = power(10)
let base = p(2)

console.log(base)
 

