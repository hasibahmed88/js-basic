// First class function

    // 1. A Function can be stored in a variable

    // 2. A Function can be stored in an Array

    // 3. A Function can be stored in a Object

    // 4. We can Create Function as Need

    // 5. We can Pass Function as an Arguments

    // 6. We can return Functions from Another Function


// code

// 1. A Function can be stored in a variable

function add(a,b){
    return a+b
}

var sum = add

console.log(sum(10,40))

console.log(typeof sum)


// 2. A Function can be stored in an Array

var arr = []

arr.push(sum)

console.log(arr[0](10,20))


// 3. A Function can be stored in a Object

var person = {
    fname: 'Hasib',
    lname: 'Ahmed',
    age: 24,
    fullname: function(){
        return this.fname + ' ' + this.lname 
    }
}

console.log(person.fullname())

// 4. We can Create Function as Need

setTimeout(function(){
    console.log('I have created a function ...')
}, 2000);
