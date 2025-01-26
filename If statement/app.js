// Q--1
// let nam = prompt('Enter your name')


// if(nam == ''){alert('enter your correct name')}
// else (document.write(`Hi, ${nam} good morning`))


// Q--2

// let nam = +prompt('Enter number')


// if(nam >= 1 ){
//     document.write(
//         `${nam} x 1 = ${nam*1}
//         ${nam} x 2 = ${nam*2}
//         ${nam} x 3 = ${nam*3}
//         ${nam} x 4 = ${nam*4}
//         ${nam} x 5 = ${nam*5}
//         ${nam} x 6 = ${nam*6}
//         ${nam} x 7 = ${nam*7}
//         ${nam} x 8 = ${nam*8}
//         ${nam} x 9 = ${nam*9}
//         ${nam} x 10 = ${nam*10}`)
// }
// else(document.write(
//     `5 x 1 = ${5*1}
//     5 x 2 = ${5*2}
//     5 x 3 = ${5*3}`)
// )

// Q--3

// let nam = prompt('Enter your city name')


// if(nam == 'karachi'){alert('Mobil bachao')}
// else (document.write(`mobile safe h sir`))


// Q--4

// Program to display a message based on gender input

// // Take gender input from the user
// let gender = prompt("Please enter your gender (male/female):").trim().toLowerCase();

// // Check the input and display the appropriate message
// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma’am.");
// } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
// }



// Q---5
// let signalColor = prompt("Enter the color of the traffic signal (red/yellow/green):").trim().toLowerCase();

// // Check the input and display the appropriate message
// if (signalColor === "red") {
//     alert("Stop! The red signal means you must stop.");
// } else if (signalColor === "yellow") {
//     alert("Ready! The yellow signal means get ready to move.");
// } else if (signalColor === "green") {
//     alert("Go! The green signal means you can proceed.");
// } else {
//     alert("Invalid input. Please enter 'red', 'yellow', or 'green'.");
// }



// Q---6
// // Program to check remaining fuel in the car

// // Take input for remaining fuel in liters
// let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// // Check if the fuel is less than 0.25 liters
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// } else {
//     alert("You have sufficient fuel in your car.");
// }

// Q--7

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



// Q--9
// Program to calculate percentage and grade

// Take input for marks obtained in three subjects
// let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
// let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
// let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

// // Take input for total marks
// let totalMarks = parseFloat(prompt("Enter total marks:"));

// // Calculate total marks obtained and percentage
// let marksObtained = subject1 + subject2 + subject3;
// let percentage = (marksObtained / totalMarks) * 100;

// // Determine the grade based on the percentage
// let grade;
// if (percentage >= 80) {
//     grade = "A";
// } else if (percentage >= 70) {
//     grade = "B";
// } else if (percentage >= 60) {
//     grade = "C";
// } else if (percentage >= 50) {
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// // Display the result
// document.write("<h3>Result</h3>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade);

// Q--10
// Program for shopping cart checkout process

// Take inputs from the user
// let item1Name = prompt("Enter the name of item 1:");
// let item2Name = prompt("Enter the name of item 2:");

// let item1Price = parseFloat(prompt("Enter the price of item 1 (PKR):"));
// let item2Price = parseFloat(prompt("Enter the price of item 2 (PKR):"));

// let item1Quantity = parseInt(prompt("Enter the quantity of item 1:"));
// let item2Quantity = parseInt(prompt("Enter the quantity of item 2:"));

// let shippingCharges = parseFloat(prompt("Enter the shipping charges (PKR):"));

// // Calculate the total cost
// let item1Total = item1Price * item1Quantity;
// let item2Total = item2Price * item2Quantity;
// let subtotal = item1Total + item2Total;
// let totalCost = subtotal + shippingCharges;

// // Apply a 10% discount if the total cost exceeds 2000 PKR
// let discount = 0;
// if (totalCost > 2000) {
//     discount = totalCost * 0.1; // 10% discount
//     totalCost -= discount;
// }

// // Display the receipt in the browser
// document.write("<h3>Shopping Cart Receipt</h3>");
// document.write("Item 1: " + item1Name + " (Price: " + item1Price + " PKR, Quantity: " + item1Quantity + ")<br>");
// document.write("Item 2: " + item2Name + " (Price: " + item2Price + " PKR, Quantity: " + item2Quantity + ")<br>");
// document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
// document.write("Subtotal: " + subtotal + " PKR<br>");
// if (discount > 0) {
//     document.write("Discount (10%): -" + discount.toFixed(2) + " PKR<br>");
// }
// document.write("<strong>Total Cost: " + totalCost.toFixed(2) + " PKR</strong>");



// Program to pluralize a noun based on the number

// Take inputs from the user
// let noun = prompt("Enter a noun (e.g., cat, dog):").trim();
// let number = parseInt(prompt("Enter a number:"));

// // Determine the pluralized form of the noun
// let pluralizedNoun = (number === 1) ? noun : noun + "s";

// // Display the result
// alert(number + " " + pluralizedNoun);
// // Program to pluralize a noun based on the number

// // Take inputs from the user
// let noun = prompt("Enter a noun (e.g., cat, dog):").trim();
// let number = parseInt(prompt("Enter a number:"));

// // Determine the pluralized form of the noun
// let pluralizedNoun = (number === 1) ? noun : noun + "s";

// // Display the result
// alert(number + " " + pluralizedNoun);




