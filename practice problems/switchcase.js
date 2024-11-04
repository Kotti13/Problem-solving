// let char='i';

// let message="";
// switch (char){
//     case'A':
//     case'a':
//     case'E':
//     case'e':
//     case'I':
//     case'i':
//     case'O':
//     case'o':
//     case'U':
//     case'u':
//     message="this is vowel"
//     break;
//     default:
//         message="this is consonant"
// }
// console.log(message);




// //2.
// let monthnumber=13;
// let month="";

// switch(monthnumber){
//     case"january":
//     console.log("This is january month")
//     break;
//     case"febraury":
//     case"march":
//     case"april":
//     case"may":
//     case"june":
//     case"july":
//     case"auguest":
//     case"september":
//     case"october":
//     case"november":
//     case"december":
// }
// console.log("month")




// //
// function calculator(operator, number1, number2) {
//     let result = 0;
//     switch(operator) {
//         case '+':
//             result = number1 + number2;
//             console.log(result);
//             break;
//         case '-':
//             result = number1 - number2;
//             console.log(result);
//             break;
//         case '*':
//             result = number1 * number2;
//             console.log(result);
//             break;
//         case '/':
//             result = number1 / number2;
//             console.log(result);
//             break;
//         default:
//             console.log("invalid operator");
//             break;
//     }
// }
// c

function sumOfMultiplesOfFive(n) {
    let sum = 0;        // Initialize sum to 0
    let i = 1;          // Start with the first multiple
    while (i <= n) {    // Continue while i is less than or equal to n
        sum += i * 5;   // Add the current multiple of 5 to sum
        i++;            // Move to the next multiple
    }
    return sum;         // Return the total sum
}

// Example usage:
let n = 5;
console.log(sumOfMultiplesOfFive(n));  // Output will be 75 (5 + 10 + 15 + 20 + 25)
