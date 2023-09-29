const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
// console.log(`acc: ${acc} amd currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc+ currval , 0)
// const myTotal = myNums.reduce((acc, currval) => {return acc+ currval} , 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "Js course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "webdev course",
        price:3999
    }
]

// const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
const priceTopay = shoppingCart.reduce((acc, item) => {return acc + item.price}, 0)

console.log(priceTopay);