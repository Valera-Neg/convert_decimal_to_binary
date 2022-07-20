// Converting decimal numbers to binary in JavaScript is easy. 
// For example, let x = 42 creates a new variable x that contains the base 10 number 42. 
// JavaScript numbers have a toString() method that takes a radix parameter. 
// Calling x.toString(2) tells JavaScript to convert x to a string containing the binary representation of 42.

function addBinary(a,b) {
  return (a + b).toString(2);
}


console.log(addBinary(2, 40)) // => 101010
console.log(addBinary(1, 1)) // => 10
console.log(addBinary(5, 9)) // => 1110
console.log(addBinary(100, 22)) // => 1111010