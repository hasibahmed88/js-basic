
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

for(let i in obj){
    console.log(i + ': ' + obj[i])
}

if('d' in obj){
    console.log(true)
}
else{
    console.log(false)
}



