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

// console.log(id == anotherId);//false

const bigNumber = 56594564684654n // bigInt


// Reference (Non- primitive datatype)

//Array, Objects, Functions

const heros = ["krishna", "Arjun", "Siva"];
let myobj = {
    name: "krishna",
    age: 22
}

const myfunction = function(){
    // console.log("Hare Krishna");
}


// console.log(typeof heros);//object
// myfunction();
// console.log(myfunction());//undefined



//***********************************************

//stack(Primitive), and Heap(Non-primitive)


let myYoutubename = "withkrishna"


let anothername = myYoutubename;
anothername = "harekrishna"
// console.log(myYoutubename);
// console.log(anothername);

let user ={
    email: "kumar9835vishal@gmail.com",
    upi: "user@ybl"
}

let user2 = user

user2.email ="kumar9386vishal@gmail.com";

// console.log(user.email);
// console.log(user2.email);



//prectis-------------------------------->


// const arr = [1,2,34,5,6]
// // console.log(typeof arr);
// let myObject = {
//     name: "krishna",
//     age: 16,
//     salary: 1
// }

// // console.log(myObject);

// const myfun = function(){
//     console.log(myObject);
// }

// // myfun();

// const myfun2 = ()=> {
//     // console.log(myfun());
//     myfun();
// }

// myfun2();