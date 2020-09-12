// Function method, -> name, length, call, apply, bind

console.log(test.name,test.length)

function myFun(c,d){
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFun.call({a:40, b:25},10,20)
myFun.apply({a:400, b:250},[10,20])
myFun.apply({})
myFun()

var testBind = myFun.bind({a: 10,b:15})

testBind(5,10)