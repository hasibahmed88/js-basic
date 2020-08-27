

function greeting(greet, name){

    function hello(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            return 'there'
        }
    }
    let message = greet + ' ' + hello()

    console.log(message)
}


greeting('Good Morning','Hasib Ahmed')

let num = 8

if (num <= 5) {
    console.log('Hi')
} 
else if(num >= 6 && num <=10){
    console.log('Hello')
}
else{
    console.log('Bye')
}


