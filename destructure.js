// 9th video 
// Object Destructure 

const object1={Name:'Thyive Hayder',Age:25,Dream:'Web Developer',present:'Hard Life'}
const {Dream}=object1
console.log(Dream);

const {Age,present}=object1
console.log(Age,present);

// Destructure Complex Object 

const object2={Name:'Anon',Age:25,
life:{
    hard:'yes',
    can:'In sha Alllah'
}
}
const {can}=object2.life
console.log(can);

// Array Destructure 
const array1=['Thyive Hayder ','Age:25','In sha allah I will']
const [name]=array1
console.log(name);
const [name2,...anotherArray]=array1
console.log(name2,anotherArray);
