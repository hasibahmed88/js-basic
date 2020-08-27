//  =================== for loop ===================

/*
var sum =0;
for(var i=0; i<=10; i++){
    sum+=1
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
}

console.log(sum)

 console.log("===== while loop")

 */
//  =================== While loop ===================

var isTrue = true

while(isTrue){
    var rand = Math.floor(Math.random() * 10)
    
    if(rand == 5){
        console.log("5 is Winner!");
        isTrue = false
    }
    else{
        console.log("Random number is : "+ rand)
    }
}


//  =================== Do While loop ===================

var isFalse = false

do{
    console.log("This is do while loop")
}while(isFalse)
