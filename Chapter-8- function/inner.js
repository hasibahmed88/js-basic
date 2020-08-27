

function something(greet, name){

    function getFirstName(){

        return name ? name.split(' ')[0] : ''
    }
    
    let message = greet + ' ' + getFirstName()

    console.log(message)
}

let morning = "Good Morning"
let noon = "Good Noon"
let evening = "Good Evening"
let night = "Good Night"

let time = new Date()

let hour = Math.ceil(time.getHours())
console.log(hour)


if (hour >= 4 && hour <= 11 ) {
    console.log(morning)
}
else if(hour >=12 && hour <= 16){
    console.log(noon)
}
else if(hour >= 17 && hour <= 20 ){
    console.log(evening)
}
else if(hour >= 21 && hour <= 24 || hour >=1 && hour <= 3 ){
    console.log(night)
}





