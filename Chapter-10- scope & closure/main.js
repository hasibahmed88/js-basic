

// var a = 100

// // newPrint(a)

// print(10)
// var newPrint = print
// newPrint(50)

// function print(x){
//     console.log(x)
// }
// print(a)



// abc()
// function abc(){
//     console.log("Hello")
// }

// var newFun = function (){
//     console.log("World")
// }

// newFun()


for(var i = 0; i< 6; i++){
    (function(n){
        setTimeout(function(){
            console.log(n)
        },1000 * n)
    })(i)
}




 