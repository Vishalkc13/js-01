// Function

// console.log("k");
// console.log("r");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("n");
// console.log("a");



function sayName() {
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");

}

// sayName();


// function addTwoNumbers(number1, number2){
//    console.log( number1+number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result

    return number1+number2
 }

// addTwoNumbers()
// addTwoNumbers(5, 7)
// addTwoNumbers(5, "7")
// addTwoNumbers(5, "a")
// addTwoNumbers(5, null)

// const result = addTwoNumbers(5, 9)
// console.log("Result: ", result);



function loginUserMessage(username){
    if(username == undefined){

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("krishna"));
// console.log(loginUserMessage());


// function calculateCartprice(num1){
//     return num1;
// }

// console.log(calculateCartprice(5));

// (...)rest operator

// function calculateCartprice1(...num1){
//     return num1;
// }

// console.log(calculateCartprice1(200, 400, 500, 800, 345));


// function calculateCartprice2(val1, val2, ...num1){
//     return num1;
// }

// console.log(calculateCartprice2(200, 400, 500, 800, 345));


const user ={
    username: "krishna",
    prices: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user);

// handleObject({
//     username: "radha",
//     prices: 234
// })


const myNewarr = [200, 343, 454, 676, 454]

function returnSecondValue(getArr){
    return getArr[1]
}

// console.log(returnSecondValue(myNewarr));

console.log(returnSecondValue([200, 349, 500,454]));


