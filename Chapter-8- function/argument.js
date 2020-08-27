

function test(){
    // console.log(arguments)
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}

test(10,20,30)

console.log('======')

function AddAll(){
    let max = arguments[0]

    for(let i = 1; i<arguments.length; i++){
        if (max < arguments[i]) {
            max = arguments[i]
        }
    }
    console.log(max)
}

AddAll(500,10,705,20,100)

function person(name,email){
    return {
        name: name,
        email: email
    }
}

let p1 = person('Hasib Ahmed','hasibahmed885@gmail.com')

console.log(p1)


