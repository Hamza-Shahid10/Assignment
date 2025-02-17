// let cars = ['Mehran' , 'alto', 'civic','corolla']
// let copyCars = []
// let copyAll =[]
// let Final = []


// for(let i = 0 ; i < cars.length; i++){
//   copyCars[i] = cars[i].slice(0,1).toLocaleUpperCase()
  
//   Final[i] = copyCars   
// }

// document.write(copyCars.join(' '));

// var arr = ['Mehran', 'Audi', 'V8', "Fx", "Foxi", "Khyber", "Alto"]
// var car = prompt("enter a name")
// var copy = car[0].toUpperCase()
// var copyall = copy + car.slice(1).toLowerCase()
// var check = arr.indexOf(copyall)

// if (check == -1) {
//     document.write(`<h1>${copyall}  car not found</h1>`)
// } else {
//     document.write(`<h1>${copyall}  car found</h1>`)
// }



// Q----8
// let message = 'ali and shafi are best friend. they play football and cricket everday'
// let newMessage = message.replaceAll('and','&')

// console.log(newMessage)



// Q---9

// let message = '372'
// let newMessage = Number(message)

// console.log(newMessage)





// // Q---14
// let str = '35.36'
// let maazBharwa = str.split('.').join('')

// console.log(maazBharwa)


// // // Q---15
// let a = 3
// let b = '3'
// let maazBharwa = a + b


// console.log(maazBharwa)


// Q---17

// let user = prompt('enter name')
// let arr = ['@',".", ',' , '!']

// for (let i = 0; i < user.length ; i++){
//   for(let j = 0; j < arr.length; j++ ){
//     if(user[i] == arr[j]){
//       console.log('maaz bhrwa likho')
//     }
//   }
// }


// Q--18
// let arr = ['cake',"apple pie", 'cookie']
// let user = prompt('enter name').toLocaleLowerCase()

// for (let i = 0; i < arr.length ; i++){
//     if(user == arr[i]){
//       console.log('maaz bhrwa h')

// }}

// Q--20

// function isValidPassword(password) {
//   // Check if the password is at least 6 characters long
//   if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
//     return false;
//   }
  
//   // Check if the password starts with a number
//   if (/\d/.test(password.charAt(0))) {
//     alert("Password should not start with a number.");
//     return false;
//   }
  
//   // Check if the password contains at least one letter and one number
//   if (!/[a-zA-Z]/.test(password)) {
//     alert("Password must contain at least one alphabet.");
//     return false;
//   }
  
//   if (!/[0-9]/.test(password)) {
//     alert("Password must contain at least one number.");
//     return false;
//   }
  
//   return true;
// }

// function promptPassword() {
//   let password;
//   // Continue prompting until a valid password is entered
//   do {
//     password = prompt("Enter your password:");
//     // If user clicks cancel, break out of the loop (optional)
//     if (password === null) {
//       alert("Password input cancelled.");
//       return;
//     }
//   } while (!isValidPassword(password));
  
//   alert("Password is valid.");
// }

// // Start the prompt
// promptPassword();

//  Q---21
// var university = "“University of Karachi”";
// let newUniversity = university.split(' ')
//   console.log(newUniversity)


  //  Q--22

// let user = 'shafi paddo'
// let show = user.length - 1
// let print = user[show]
// console.log(print)


  // Q--23
let str = 'the quick brown fox jumps over the lazy dog'
let arr = str.split(' ')
num = 0

for(let i = 0 ; i < arr.length; i++)
if(arr[i] == 'the'){
  num += 1
}

console.log(num)

let conson = str.length - num

console.log(num, conson)


  //  Q---24
// let str = 'pakistan'
// let arr = str.split('')
// num = 0

// for(let i = 0 ; i < arr.length; i++)
// if(arr[i] == 'a' || arr[i] == 'i' ){
//   num += 1
// }

// console.log(num)

// let conson = str.length - num

// console.log(num , conson)