// const variable 

const name='Thyive Hayder Anon'
// name='Bekar' Not Possible
console.log(name);

const array1=['Thyive Hayder',24]
array1[1]=25
array1.push('Hard life')
// array1=['Thyive Hayder Anon',26] Not possible as we use const
console.log(array1);

const object1={name:'Thyive Hayder Anon', Age:25}
// object1.Age=46

object1['name']='Thyive Anon'

console.log(object1);

// Let variable 
let takeFood='Rice'
takeFood='polao'
console.log(takeFood);