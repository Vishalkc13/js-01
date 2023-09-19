// singleton 

Object.create

//object literals

const mySyn = Symbol("key1")

const jsUser = {
    name: "krishna",
    'full name': "vishal pandit",
    age: 16,
    [mySyn]: "key1",
    salary: 'love',
    location: 'golock',
    email: "vishal9835kumar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySyn]);


jsUser.email = 'krishna@chatgpt.com'
// Object.freeze(jsUser)
jsUser.email = 'krishna@Radha.com'

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

