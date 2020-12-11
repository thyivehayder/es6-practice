// Function Declaration

function functionDeclaration(number) {
    return number*2
}
console.log(functionDeclaration(5))

// Function Expression

const functionExpression=function adding(num1,num2) {
  console.log(num1+num2);
}
functionExpression(10,10)

// ES6 Arrow Function 
// one parameter 

const arrowOne=number=>number*3
console.log(arrowOne(5));

const arrowTwo=(number1,number2)=>number1/number2
console.log(arrowTwo(12,2));

// Multiple Statement Function Body

const arrowThree=(number1,number2)=>{
    const add=number1+number2
    const difference=number1%number2
    const result=add+difference
    return result
}
console.log(arrowThree(12,7));