
var totalExpenseEl = document.getElementById("totalExpense")
var totalExpense = 0
var getUl=document.getElementById("expenseList")

function addExpense() {
  var name = document.getElementById("naam").value
  var amount = +(document.getElementById("paise").value)


  var li = document.createElement("li")
  li.innerHTML = `
        ${name} $${amount}
        <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>
      `

  expenseList.appendChild(li)
  totalExpense += amount
  updateTotal()

  document.getElementById("naam").value = ""
  document.getElementById("paise").value = ""
}


function deleteExpense(button, amount) {
  var li = button.parentElement
  // expenseList.removeChild(li)
  totalExpense += amount
  updateTotal()
}

function updateTotal() {
  totalExpenseEl.textContent = totalExpense.toFixed(2)
}

function delet() {
  getUl.innerHTML = ''
  console.log(totalExpenseEl)
  totalExpenseEl.innerHTML = ""
}















// var expenseList = document.getElementById("expenseList")
// var totalExpenseEl = document.getElementById("totalExpense")
// var totalExpense = 0
// var name = document.getElementById("naam")
// var amount =  document.getElementById("paise")
// function addExpense() {
//     var li = document.createElement("li")
//       li.innerHTML = `
//         ${name.value} - $${amount.toFixed(2)}
//         <button class="delete-btn" onclick="deleteExpense(this, ${amount.value})">Delete</button>
//       `
//       expenseList.appendChild(li)
//       totalExpense += amount
//       document.getElementById("naam").value = ""
//       document.getElementById("paise").value = ""
// }
// function delet() {
//     expenseList.innerHTML = ''
// }