//Immediately Invoked Function Expressions (IIFE)

// function Rk(){
//     console.log(`RadhaKrishna`);
// }

// Rk()




(function Rk() {
    console.log(`RadhaKrishna`);
})();


(function SR (){
    //named IIFE
    console.log(`SiyaRam`);
})();


(() => {
    console.log(`RadheyShyam`);
})();


((name) => {
    console.log(`${name}`);
})("shreeji");