
var a = 'abc'

if(true){
    if(true){
        let a = "Hello A"
    }
}

function hi(){
    var b = "Parent B"

    function hello(){
        // var b = 'Child b'
        console.log(b)
    }

    hello()
    console.log(b)

}
console.log(a)

hi()

console.log('======')


function myFun(num){

    function a(){
        return num % 3 == 0
    }

    function b(){
        return num % 5 == 0
    }

    if( a() && b() ){
        console.log('This is a valid number which divided by 3 and 5!')
    }
    else{
        console.log("This is not a valid number!")
    }
}

myFun(15)




