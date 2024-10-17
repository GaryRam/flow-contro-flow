const d = new Date();
let hour = d.getHours();

console.log(hour);


if(hour < 12){
    console.log('Morning Time');
}
else if(hour < 17){
    console.log('Afternoon Time');
}
else{
    console.log('Night Time');
}