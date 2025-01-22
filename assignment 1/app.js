// var num1 = parseInt(prompt("enter any number 1"))
// var num1 = +prompt("enter any number 1")
// var num1 = Number(prompt("enter any number 1"))
// document.write(typeof(num1)) 
// var num2 = prompt("Enter any number 2")
// var sum = num1 + num2

// var num1 = +prompt("Enter any number 1")
// var num2 = +prompt("Enter any number 2")
// var sum = num1 + num2
// var minus = num1 - num2
// document.write(sum)



// if
// if else
//  if else if

// if(2 >= 2){
//     document.write("ok")
// }


// > greater than
// < less than
// <= less than equal to
// >= greater than equal to
// == equals to
// = assignment operator
// === datatype or value dono check krega
// != not equal to
// !== strictly not equal to
// && and op  both sides should be true
// || Or op  anyone side should be true



// var num1 = 2
// var num2 = "2"
// document.write(num1 === num2)


// var val1 = +prompt("Enter number")
// var val2 = +prompt("Enter number")
// var operator = prompt("Enter any operator") 

// if(operator == "+" || operator == 'plus'){
//     document.write(val1 + val2)
// }
// else if(operator == '-'){
//     document.write(val1 - val2)
// }
// else if(operator == "x" || operator == "*"){
//     document.write(val1 * val2)
// }
// else if(operator == "/"){
//     document.write(val1 / val2)
// }
// else if(operator == '%'){
//     document.write(val1 % val2)
// }
// else{
//     document.write('invalid operator')
// }


// var num1 = +prompt("Enter any number")
// var num2 = +prompt("Enter any number")

// document.write(
//     `
//     The addition of ${num1} and ${num2} = ${num1 + num2}
//     <br>
//     The subtraction of ${num1} and ${num2} = ${num1 - num2}
//     <br>
//     The multiplication of ${num1} and ${num2} = ${num1 * num2}
//     <br>
//     The division of ${num1} and ${num2} = ${num1 / num2}
//     <br>
//     The Module of ${num1} and ${num2} = ${num1 % num2}
//     `
// )



// confirm("hakeem k pas gaye ?")


var item_1name = prompt("Enter item name")
var item_1price = +prompt("Enter item price")
var item_2name = prompt("Enter item name")
var item_2price = +prompt("Enter item price")
var item_3name = prompt("Enter item name")
var item_3price = +prompt("Enter item price")
var item_4name = prompt("Enter item name")
var item_4price = +prompt("Enter item price")
var total = item_1price + item_2price + item_3price + item_4price
var grade;

if(total >= 1500){
    grade = 10
}
else if(total >= 1000){
    grade = 7
}
else if(total >= 600){
    grade = 5
}
else if(total >= 450){
    grade = 3
}
else{
    grade = 0
}

var dis = (grade/100)
var totaldis = dis * total
var discount = total - totaldis

document.write(
    `
    <table border=''> 
    <tr>
    <th> Item Name </th>
    <th> Item price </th>
    </tr>

    <tr> 
    <td> ${item_1name} </td>
    <td> ${item_1price} </td>
    </tr>
    
    <tr> 
    <td> ${item_2name} </td>
    <td> ${item_2price} </td>
    </tr>

    
    <tr> 
    <td> ${item_3name} </td>
    <td> ${item_3price} </td>
    </tr>

    
    <tr> 
    <td> ${item_4name} </td>
    <td> ${item_4price} </td>
    </tr>

    <tr> 
    <td>Total </td>
    <td> ${total} </td>
    </tr>

    <tr> 
    <td>discount </td>
    <td> ${grade} % </td>
    </tr>

    
    <tr> 
    <td>PAYABLE </td>
    <td> ${discount.toFixed(2)} </td>
    </tr>
    </table>
    `
)

{/* <td> ${perc.toFixed(2)} </td> */}







