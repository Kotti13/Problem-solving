
// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.
let arr=[2,3,4,9,5,78,1,5,67,78];
let max=arr[0];//for start with 0
let index=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
        index=i;
    }
}
console.log(index);


// Given an array find all the values less than 15 in a new array if not print No Element less than 15.  Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15

// let arr = [70, 15, 49, 25, 30];
// let minimum=[];
// for(var i=0;i<arr.length;i++){
//  if(arr[i]<15){
//      minimum.push(arr[i]);
//  }
// }
// // if(minimum.length>0){
// //     console.log(minimum.join());
// // }
// // else{
// //     console.log("No element less than 15")
// // }

// console.log(minimum.length>0?minimum.join():"No element less than 15");

// Implement the linear search algorithm. 

// let array=[ 12, 8, 9, 11, 5, 11];
// function linearSearch(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch(array,5));




 


