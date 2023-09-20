// const tinderUser = new Object() //singl tun object
const tinderUser= {} //Non-singl tun object

tinderUser.id = '123abc'
tinderUser.name = 'krishna'
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "vishal@gmail.com",
    fullname: {
        firstnaem: "krishna",
        lastname: "vishal"
    }
}

// console.log(regularUser.fullname.firstnaem);

// console.log(regularUser?.fullname.firstnaem);

const obje1 ={1:'a', 2:'b'}
const obje2 ={3:'a', 4:'b'}
// const obj1 = {obje1,obje2}

// const obj4 = Object.assign({}, obje1,obje2[3])

//  console.log(obj3);     

const obj3 = {...obje1, ...obje2}
// console.log(obj3);


const users = [
    {
        email: "kumaheb@kgmail.com",
        id: 3
    },
    {
        email: "kumaheb@kgmail.com",
        id: 3
    },
    {
        email: "kumaheb@kgmail.com",
        id: 3
    },
    {
        email: "kumaheb@kgmail.com",
        id: 3
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('phone'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);


// const {courseInstructor: instructor} = course
// console.log(instructor);

// json

// {
//     "name": "vishal",
//     "courseName": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {},
    {}
]
