// If         

const isuserloggedIn = true

if(isuserloggedIn){
    // console.log("Run");
}
else{
    // console.log("Not Run");
}

// <, >, <=, >=, ==, !=, ===


const score = 200

if(score > 100){
    const power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);


const balance = 1000

// if(balance> 500) console.log("test");
// if(balance> 500) console.log("test"), console.log("test2"); //not right way!



// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else
// {
//     console.log("less than 1200");
// }


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}