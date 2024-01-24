//primitive call by value not refrence 

//7 types : String, Number, Boolean, null,undefined,Symbol(to make value unique),BigInt

//js language in not defined so it is dynamically defined language
const score = 100
const scorevalue = 100.3
const outsidetemp = null
//null doesn't value zero it means empty
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
//symbol have differnt value each times 

console.log(id == anotherId);

const bigNumber = 3334534642345323n

//Refence type (non Primitive)

//Array, objects, Functions

const heros = ["shaktiman", "nagraaj","doga" ]
let myobj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hellow world");
}
console.log(typeof bigNumber);
console.log(typeof outsidetemp);

//++++++++++++++++++++++++++++++++++

//stack (primitive memory used) => when stack is used we get copy of variable declared ,
//Heap ( Non-primitive memory) => we get refrence of original value change is applied in original value

let myPetname = "jaguar"

let anothername = myPetname

anothername = "Bhujo"

console.log(myPetname);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@sbi"
}

let userTwo = userOne
userTwo.email = "xyz@google.com"

console.log(userOne.email); //by refence hua heap me
console.log(userTwo.email);

