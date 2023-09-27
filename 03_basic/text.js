// Javascript Execution Context
// {} --> Global Execution (this)
// i) Global execution Context
// ii) Funtion execution Context
// iii) Eval execution Context



// {} --> Memory Creation phase
// {} -->Execution phase


// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }

// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)



// i) Global Execution --> this
// ii) Memory phase 
//         val1 --> undefined
//         val1 --> undefined
//         addnum --> defined
//         result1 --> undefind
//         result2 --> undefind
// iii) execution 
//         val1 <--10
//         val2 <--5
//         addNum --> new variable environment + Execution thread   <--(Delete)
                    // Memory Phase
                    // val1--> undefined
                    // val2 --> undefined
                    // total --> undefined

                    // Execution AudioContext 
                    // num1 --> 10
                    // num2 --> 5
                    // total --> 15





// NVE + Thread
    // i) memory phase
    // ii) Execution Phase