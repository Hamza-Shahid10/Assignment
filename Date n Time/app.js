// let art = prompt("enter you color name")
//           function myFunction() {
//            document.getElementById("red").innerHTML = "I have changed!  " + art;
// }   
// let dat = new Date()
// // // let hours = dat.getHours()
// // month = dat.getMonth()
// // let day = dat.getDay()
// // let year = dat.getFullYear()
// // // let ampm = hours >= 12? 'PM' : 'AM'
// // // if(hours <= 12){console.log("AM HORHA H")}else{console.log("PM HORHA H")}
// // // console.log(hours +" " + ampm)
// // let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// // document.write(dat.getDate() + " " + months[month] + " " + year)
// let tame = dat.getTime()
// let dob = new Date(prompt("apni tareekh tw likho paidaish ki")).getTime()
// let age = tame - dob
// let my = age/(1000*60*60*24*365)
// console.log("your age is " + Math.floor(my))

// Q-- 1, 2, 3, 4
// let num = +prompt("Enter Number with Decimal")
// let numFloor =  Math.floor(num)
// let numRound = Math.round(num)
// console.log(numFLoor, numRound)

// Q--5 
// ??Absolute number in javascript??
// Math.abs() lgega

// Q--6
// let nambar = Math.floor(Math.random() * 7)
// console.log('Dice number is ' + num)

// Q--7
// let num = Math.random() * 2
// let num = Math.floor(Math.random() * 2)
// if(num == 0){confirm("HEADS")}
// else(confirm("TAILS"))

// Q--8
// let siffar = Math.floor(Math.random() * 101)
// console.log(num)

// Q--9
// let weight = +prompt("Enter your Weight in KG")
// document.write(`Your weight is ${weight} in Kilograms`)

// Q--10

// let num = Math.floor(Math.random() * 10) + 1
// let user = +prompt("Enter your number")
// if(user == num){confirm("Congratulations")}
// else(alert("try again"))

// Q--11
// let date = new Date()
// console.log(date)

// Q--12
// let date = new Date().getMonth()
// let Months = ['january','feb','Mar','apr','may','jun','jul']
// console.log(Months[date])

// Q---12 chatgpt
// const now = new Date();

// const monthName = now.toLocaleString('default', { month: 'long' });

// console.log(`The current month is: ${monthName}`);


// Q--13
// let days=['mon','tue','wed','thu','fri','sat','sun']
// let day = new Date().getDay()
// console.log(days[day])

        
        // Q--13
        // Get the current day as a string
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const today = new Date().getDay(); // Get the day index (0-6)

// Alert the first three letters of the current day
// alert("today is " + days[today]);



// Q--14
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const today = new Date().getDay(); // Get the day index (0-6)

// if(days[today] == 'Wed'){
//     alert("FUN DAY");
// }


// Q__15
// const today = new Date().getDate(); // Get the day index (0-6)
//         if(today <= 15 ) {alert("FUN DAY");}



// Q--18

let march21 = new Date(2025,2,2).getDate()
let today = new Date().getDate()
let pass = march21-today
document.write(pass)







// Q-- 12 C++
// import datetime

// # Get the current date
// current_date = datetime.datetime.now()

// # Get the current month as an integer (1 for January, 2 for February, etc.)
// current_month = current_date.month

// # List of month names
// month_names = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ]

// # Get the month name using the current_month as the index
// current_month_name = month_names[current_month - 1]

// # Display the current month in words
// print("The current month is:", current_month_name)

        

