// // //1.Fix the issues in this code
// // // calculateArea();
// // // greetUser();
// // // function calculateArea() {
// // //  const radius = 5;
 
// // //  var area = Math.PI * radius * radius;
// // //  console.log(area);
// // // }

// // // function greetUser() {
// // //  console.log(userName);
// // //  var userName = "John";
// // // }

// // //2. Why is this loop not stopping? How can you modify the code to ensure the loop counts down properly upto 100?
// // let count = 5;
// // while (count > 0) {
// //  console.log("Counting down: " + count);
// //  count = count + 1;
// // }

// // //3. Why always `It's cold outside.` is printed irrespective of the temperature value. Fix this!
// // let temperature = 30;
// // if (temperature == 20) {
// //  console.log("It's cold outside.");
// // } else {
// //  console.log("It's warm outside.");
// // }

// // //4. Fix the issues in the code so that output is printed correctly




// // // 5

// // let number =30;
// // while(number<30&&number%2==1){
// //     console.log("odd number"+number)
// // }



// let n=1;
// while(n<=15 &&n%2==1){
//     console.log("nth term is:"+n)
//     n++;
// }


// let count = 1;
// while (count > 0) {
//  console.log("Counting down: " + count);
//  count ++;
// }




let altitude=1000;
while(altitude>0){
    altitude-=10;
    console.log("current altitude:"+altitude);
}
console.log("flight arrived");