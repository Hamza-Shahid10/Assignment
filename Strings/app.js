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





  //  Q---24
let str = 'pakistan'
let arr = str.split('')
num = 0

for(let i = 0 ; i < arr.length; i++)
if(arr[i] == 'a' || arr[i] == 'i' ){
  num += 1
}

console.log(num)

let conson = str.length - num

console.log(num , conson)