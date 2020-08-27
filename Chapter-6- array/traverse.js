let array = [5, 10, 15, 20, 25, 30, 40, 50]

for (let index = 0; index < array.length; index++) {
    console.log(array[index])
}

let sum = 0;

console.log("Summation of even number.")

for(let i = 0; i < array.length; i++){
    if(array[i]%2==0){
        sum+=array[i]
    }
}

console.log(sum)

