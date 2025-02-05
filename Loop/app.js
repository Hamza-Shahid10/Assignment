// let i;

// for(i=0;i<=10;i++){
//   document.write(i)
// }




// // Iterate from 0 to 20
// for (let num = 0; num <= 20; num++) {
//   // Check if the number is even or odd
//   if (num % 2 === 0) {
//       console.log(num + " is even");
//   } else {
//       console.log(num + " is odd");
//   }
// }


// // Initialize the product variable to 1 (since it's a multiplication)
// let product = 1;

// // Iterate through the odd numbers from 1 to 7
// for (let num = 1; num <= 7; num += 2) {
//     product *= num;  // Multiply the product by the current odd number
// }

// // Output the result
// console.log("The product of odd integers from 1 to 7 is: " + product);



// let initialStars = parseInt(prompt("Enter the initial number of stars:"));


// for (let i = initialStars; i > 0; i--) {
//     let stars = '*'.repeat(i);  // Create a string with i stars
//     document.write(stars + "<br>");  // Print the string
// }


let initialStars = parseInt(prompt("Enter the initial number of stars:"));


for (let i = 10; i > initialStars; i--) {
    let stars = '*'.repeat(initialStars);  // Create a string with i stars
    document.write(stars + "<br>");  // Print the string
}
