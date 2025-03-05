function myFunction(){ 
  let a = +prompt('Enter the first number: ');
  let b = +prompt('Enter the second number: ');
  let operator = prompt('Enter the operator (+, -, *, /): ');
  let sum;

  if(a == '' || a == null){
    alert('Error: inputs must be numbers');
    return;
  }
  switch(operator){
    case '+':
      sum = a + b;
      break;
    case '-':
      sum = a - b;
      break;
    case '*':
      sum = a * b;
      break;
    case '/':
      if(b === 0){
        alert('Error: Division by zero is not allowed');
        return;
      }
      sum = a / b;
      break;
    default:
      alert('Error: Invalid operator');
      return;
  }
  return alert(sum)
}





