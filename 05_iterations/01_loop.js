//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i = 1; i<=5; i++){
//     console.log(`outer loop value ${i}`);
//     for(let j= 1; j<=10; j++){
//         // console.log(`inner loop value ${i} and inner loop ${j}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

let myArray = ["shree", "Krishna", "Radha"]

for(let i = 0; i<myArray.length; i++){
        const element = myArray[i];
        // console.log(element);  
}



// break and continue

// for(let i = 1; i<=20; i++){
//     if(i==5){
//         console.log(`Detected 5!`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for(let i = 1; i<=20; i++){
    if(i==5){
        // console.log(`Detected 5!`);
        continue;
    }
    // console.log(`value of i is ${i}`);
}