const user = {
    username: "krishna",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,  welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Radha"
// user.welcomeMessage()
// console.log(this);


function chai(){
    let username = "krishna"
    // console.log(this);
    console.log(this.username);
}

// chai()


const chai2 = function(){
    let username = "Radha"
    console.log(this.username);
}

// chai2()

const chai3 = () =>{
    let username = "Radha"
    console.log(this.username);
    console.log(this);

}

// chai3()




//<----------------- () => {} arrow funtion --------->

const addtwo1 = (num1 , num2) => {
    return num1 + num2;
}

// console.log(addtwo(1, 4));


const addtwo2 = (num1 , num2) =>  num1 + num2;
// console.log(addtwo2(1, 4));

const addtwo3 = (num1 , num2) =>  (num1 + num2);
// console.log(addtwo3(1, 4));

// const addtwo4 = (num1,num2) => {name:"radhakrishna"} //without () not allowed

const addtwo4 = (num1,num2) => ({
    name:"radhakrishna",
    price: 7687
})
// console.log(addtwo4(1, 4));






