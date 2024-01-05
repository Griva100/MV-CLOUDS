// 1. Write a JavaScript function that returns the string with "something" appended
// with a space " " to the given string value.

function appendSomething(inputString){
    return inputString + " something ";
}
  
var originalString = "Hello";
var resultString = appendSomething(originalString);
console.log(resultString);