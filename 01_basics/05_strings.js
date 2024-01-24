const name = "suraj"
const repocount = 50

// console.log(name + repocount + " value");

console.log(`hello my name is ${name} and my name is ${repocount}`);

const gameName = new String('squidSuraj') //another way of writing string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newstringone = "   suraj   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://squidsuraj.com/raja%30kumar"
console.log(url.replace('%30','-'));

console.log(url.includes('suraj'));


