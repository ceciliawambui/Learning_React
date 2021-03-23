//blueprints for objects
//has property and method
class Person{
    constructor(){
        this.name="Cess"
    }
    printMyName(){
        console.log(this.name);
    }
}
const person=new Person();
person.printMyName();