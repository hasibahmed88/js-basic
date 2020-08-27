
// Search data in array


let array = [5, 10, 15, 20, 25, 30, 40, 50]

let find_data = 50


let isFound = false
for(let i = 0; i < array.length; i++){
    if(array[i] == find_data ){
        console.log('Data found at index '+ i);
        isFound = true
        break;
    }
    
}

if(!isFound){
    console.log('Data not found!');
}








