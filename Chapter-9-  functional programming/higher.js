// Higher function

    // 5. We can Pass Function as an Arguments

    // 6. We can return Functions from Another Function

function add(a,b){
    return a + b
}


function manipulated(a,b,func){

    var c =  a + b
    var d = a - b

    // function multiply(){
    //     var m = func(a,b)
    //     return c * d * m
    // }
    return function (){
        var m = func(a,b)
        return c * d * m
    }
}

var multi = manipulated(3,4,add)

console.log(multi())

