// dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());

// date is object 
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date (2023,0,23,5,3)
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// console.log(Math.floor(date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('Default',{
    weeday: "long"
} )