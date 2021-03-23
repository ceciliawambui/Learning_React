class Human {
    constructor(){
        this.gender="Female"
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name="Cess"
    }
    printMyName(){
        console.log(this.name);
    }
}
const person=new Person();
person.printMyName();
person.printGender();