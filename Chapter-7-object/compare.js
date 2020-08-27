

let obj = {
    a: 10,
    b: 20
}

let obj2 = {
    a: 10,
    b: 20
}

/*

if(obj.a == obj2.c && obj.b == obj2.d){
    console.log(true)
}
else{
    console.log(false)
}

*/

console.log(JSON.stringify(obj) == JSON.stringify(obj2))







