// 8th video 
class Parent{
    constructor() {
        this.fatherName='Nazmul Hayder'
    }
}
class Child extends Parent {
    constructor(name) {
        super()
        this.Name=name
    }
    classMethod(){
        return this.Name+' '+this.fatherName
    }
}
const firstChild = new Child('Thyive Hayder');
const secondChild = new Child('Nusrat Jahan Labonno');
console.log(firstChild)
console.log(firstChild.classMethod());
console.log(secondChild);