//factory function =>
/*  function personMaker(name,age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`); 
        },
    };
    return person;
}

let p1 = personMaker("nitin", 19);
console.log(p1);
console.log(p1.talk());

let p2 = personMaker("Himanshi", 19);
console.log(p2);
console.log(p2.talk());  */


// Constructors - doesn't return anything & start with capital =>
/* function person (name,age) {
    this.name = name;
    this.age = this.age;
};

person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
};
let p1 = new person("Nitin", 19);
console.log(p1);
console.log(p1.talk());
let p2 = new person("Himanshi", 19);
console.log(p2.name); */


// Class =>
/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("Nitin", 19);
console.log(p1);
console.log(p1.talk());

let p2 = new Person("Kiara", 20);
console.log(p2.name);

let p3 = new Person("Azia", 19);
console.log(p3.age);
console.log(p3.talk());     */


// Inheritance =>
class Person {
    constructor(name,age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name,age); // parent class constructor is being called...
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);  // Parent class constructor is being called...
        this.subject = subject;
    }
}

let student1 = new Student("Nitin", 19, 98);
console.log(student1);
console.log(student1.talk());

let teacher = new Teacher("Zoya", 29, "oops");
console.log(teacher);
console.log(teacher.subject);