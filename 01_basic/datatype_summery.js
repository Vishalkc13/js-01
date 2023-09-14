//# primitive datatype

// 7 type : string, number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
let userEmail2 = undefined; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);//false

const bigNumber = 56594564684654n // bigInt


// Reference (Non- primitive datatype)

//Array, Objects, Functions

const heros = ["krishna", "Arjun", "Siva"];
let myobj = {
    name: "krishna",
    age: 22
}

const myfunction = function(){
    console.log("Hare Krishna");
}


console.log(typeof heros);//object
myfunction();
console.log(myfunction());//undefined