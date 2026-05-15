// QUESTION:1 
// let addNumbers = (a,b) => a + b;
// console.log(addNumbers (8,9)); 

// QUESTION:2
// let evenOrodd = (num)=> {
//   if(num %2===0){
//     return "even";
//   }
//   else{
//     return"odd"
//   }
// }
// console.log(evenOrodd(12));
// console.log(evenOrodd(9));

// QUESTION:3
// let greaterNum = (a,b) => {
//   if(a > b){
//     return `${a}  is greater number`;
//   }
//   else{
//     return `${b} is greater number` ;
//   }
// }
// console.log(greaterNum(30,35)); 

// QUESTION:4
// let studentMarks = (marks) => {
//   if(marks > 40){
//     return "pass";
//   }
//   else{
//     return "Fail";
//   }
// }
// console.log(studentMarks(60));

// QUESTION:5

// QUESTION:6
// let  squareNum = (num) => num * num;
// console.log(squareNum(5));

// QUESTION:7
// let uppercase = (text) => text.toUpperCase();
// console.log(uppercase("hello bella"));

// QUESTION:8
// 
// let lowercase = (text) => text.toLowerCase();
// console.log(lowercase("I aM a weB deVeLopER"));

// QUESTION:9
// let isEmpty = (str) => str === "";
// console.log(isEmpty("")); 

// QUESTION:10

// let returnFirstChar = (word) => word.charAt(0);
// console.log(returnFirstChar("hello"));

// QUESTION:11

// let arrayFirst = (arr) => arr[0];
// console.log(arrayFirst(["RED", "BLUE", "GREEN"])); 

// QUESTION :12

// let arrayLast= (arr) => arr[arr.length - 1];
// console.log(arrayLast([10, 15, 45,65 ]));

// QUESTION:13

// let countArray = (arr) => arr.length;
// console.log(countArray([4,8,12,16,20,24,28]))

// QUESTION:14

// let evenArray = [2,4,6,8,10,12,14];

// let evenNumbers = evenArray.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// QUESTION:15

// let oddArray = [1,3,5,7,9,11,13];

// let oddNumbers = oddArray.filter((num) => num % 2 != 0);
// console.log(oddNumbers);

// QUESTION:16

// let GreaterArray = [13,14,15,16,10,11];

// let largeNumber = GreaterArray.filter((num) => num > 10);
// console.log(largeNumber);

// QUESTION:17

// let arrayLarge = [3,6,9,10,15];

// let arrayReturn = Math.max(...arrayLarge);
// console.log(arrayReturn);

// QUESTION:18

// let arraySmall = [2,5,7,9,10];

// let smallReturn = Math.min(...smallNum);
// console.log(arraySmall);

// QUESTION :19

// QUESTION:20

// let integers =  [2,5,7,9,10];

// let removeLast = (arr) => arr.pop();
// console.log(removeLast(integers));
// console.log(integers);

// QUESTION:21

// let sumNumbers =  [2,5,7,9,20,10];

// let sumArray = (arr) => {
//   let sum = 0;

//   for(let i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//   }
//   return sum;
// };
// console.log(sumArray(sumNumbers));


// QUESTION:22

// let countVowels = (str) => {
//   let count = 0;
//   let vowels =  "aeiouAEIOU";

//   for(let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//     count++
//     }
//   }
//   return count;
// }
// console.log(countVowels("WEB DEVELOPMENT"));

// QUESTION :23

// let spacesRemove = (str) => str.replaceAll(" ", "");
// // console.log(spacesRemove("My Assigment"));

// QUESTION :24


// QUESTION:25

// let firstWord = (sentence) => {
//   let words = sentence.split(" ");
//   return words[0];
// }
// console.log(firstWord("Student Card"));

// QUESTION:26

// let lastWord = (sentence) => {
//   let word = sentence.split(" ");
//   return word[word.length - 1];
// }
// console.log(lastWord("Student Card"));

// QUESTION:27

// QUESTION:28

// let isDivisibalBy3 = (num) => num % 3 === 0; 
// console.log(isDivisibalBy3(11)); 
// console.log(isDivisibalBy3(6));

// QUESTION:29

// QUESTION:30

let arrayWords = (sentence) => sentence.split("");
console.log(arrayWords("hey! I am naima jameel"));