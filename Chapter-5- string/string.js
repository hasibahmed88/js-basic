
// var n = 10
// var str = String(n)

// console.log(str)


// var a = 'a'
// var A = 'A'

// console.log('001' == 1)

// console.log(a==A)


// ----------Unicode
// console.log(a.charCodeAt())
// console.log(A.charCodeAt())


var a = "I am"
var b = "Hasib Ahmed"

var c = a.concat(' '+b)

var d = c.substr(5)

var e = "Welcome to C Programming!"

console.log(c.startsWith('I'))
console.log(c.endsWith('Ahmeds'))

console.log(c.toUpperCase())
console.log(c.toLowerCase())

console.log('    Hello    World!'.trim())

console.log(c.split(' '))

console.log(e.replace('C','JavaScript'))


// Count string

var str = "I love Bangladesh"

var lenght = 0

while(true){
    if(str.charAt(lenght) == '' ){
        break
    }
    else{
        lenght++
    }
}

console.log(str.length)






