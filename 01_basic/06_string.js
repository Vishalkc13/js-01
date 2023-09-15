// const name = "krishna"
// const repoCount = 5

// console.log(name + repoCount + " RadhaRani");

// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('krishna')

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));

const gameName1 = new String('krishna-Radha')
const gameName2 = new String('krishna-Radha')

const newString = gameName1.substring(-8, 4)
// console.log(newString);

const anotherstring = gameName1.slice(0, 4)
// console.log(anotherstring);

const newString1 = "     Krishna"
// console.log(newString1.trim());
// console.log(newString1.trimEnd());
// console.log(newString1.trimStart());


const url = "https://withkrishna.com/radha%20krishna"

// console.log(url.replace("%20", '-'));

// console.log(url.includes('krishna'));
// console.log(url.includes('Radha'));
// console.log(url.includes('radha'));

console.log(gameName1.split('-'));
console.log(gameName2.split(' '));