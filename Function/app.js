// Q---1

// function dato() {
//   let abhi = new Date()
//   console.log(abhi)
// }

// Q---2
// function dato() {
//     let firstName = prompt('Enter your name')
//     let lastName = prompt('Enter your Last name')
//     document.write(`Hi, Welcome <strong> ${firstName} ${lastName}</strong>`)
// }


// Q---3
// function dato(){
//   let firstName = +prompt('Enter your name')
//   let lastName = +prompt('Enter your Last name')
//   document.write(`The sum of this number <strong> ${firstName + lastName}</strong>`)
// }


// Q---4
// function myFunction(){ 
//   let a = +prompt('Enter the first number: ');
//   let b = +prompt('Enter the second number: ');
//   let operator = prompt('Enter the operator (+, -, *, /): ');
//   let sum;

//   if(a == '' || a == null){
//     alert('Error: inputs must be numbers');
//     return;
//   }
//   switch(operator){
//     case '+':
//       sum = a + b;
//       break;
//     case '-':
//       sum = a - b;
//       break;
//     case '*':
//       sum = a * b;
//       break;
//     case '/':
//       if(b === 0){
//         alert('Error: Division by zero is not allowed');
//         return;
//       }
//       sum = a / b;
//       break;
//     default:
//       alert('Error: Invalid operator');
//       return;
//   }
//   return alert(sum)
// }



// Q---5
// function dato() {
//       let firstName = +prompt('Enter your name')
//       let square = firstName * firstName
//       document.write(`Hi, Welcome <strong> ${square}</strong>`)
//   }


// Q---6
// function dato(){
//     const number = +prompt('Enter a positive integer:');
//     let fact = 1;
//     if (number > 0) {
//         for (i = 1; i <= number; i++) {
//             fact *= i;
//         }
//         document.write(`The factorial of ${number} is ${fact}.`);
//     }
// }

// Q---7
// function dato(){
//   let firstName = +prompt('Enter your name')
//   let lastName = +prompt('Enter your Last name')
//   for (i=firstName; i <= lastName;i++){
//     document.write(i)
//   }
// }

// Q---8
// function dato(){
//   let a = +prompt('Enter the first number: ');
//   let b = +prompt('Enter the second number: ');
//   let hd = (a*a) + (b*b)
//   let final = hd * hd
//   document.write(`The hyptensue of ${a} & ${b} is ${final}.`);
// }


// Q---9
// function dato(){
//   calculateAreaByValue();   
//   calculateAreaByVariable(); 
// }

// function rectangleArea(width, height) {
//   return width * height;
// }

// function calculateAreaByValue() {
//   let a = +prompt('Enter the first number: ');
//   let b = +prompt('Enter the second number: ');
//   let area = rectangleArea(a, b); // Direct values
//   console.log("Area (Value Arguments): " + area);
// }


// function calculateAreaByVariable() {
//   let width = 8;
//   let height = 4;
//   let area = rectangleArea(width, height); // Passing variables
//   console.log("Area (Variable Arguments): " + area);
// }

// Q---9
function dato(){
  let a = prompt('Enter the first number: ');
  // document.write(`yeh h ${a}`);
  for (i = a.length; i >= 0; i--){
        document.write(a[i] += '' )
      }
}




