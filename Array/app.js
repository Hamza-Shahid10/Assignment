const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('show');
});






// Q---18
// let students = new Array()

// students[0] = 'Hamza Shahid'

// document.write(`
//   <center>
//   <select> 
//   <option>${students[0]}</option>
//   </select></center>`)


// Q---17
// let devices = new Array()

// devices[0] = 'Computer'
// devices[1] = 'keyboard'
// devices[2] = 'Mouse'
// devices[3] = 'Monitor'


// document.write(`
//   <center>
//   <select> 
//   <option>${devices[3]}</option>
//   <option>${devices[2]}</option>
//   <option>${devices[1]}</option>
//   <option>${devices[0]}</option>
  
//   </select></center>`
// )

// Q---8
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const fruits2 = fruits;
// fruits.reverse()


// document.write(`Score of ${fruits[2]} is ${fruits2[2]}`)


// Q--2
// let devices = new Array()

// devices[0] = 'Computer'


// Q--16
const fruits = ["Banana", "Orange", "Apple", "Mango"];

const fruits2 = fruits.join(" ")
;


document.write(fruits2)



