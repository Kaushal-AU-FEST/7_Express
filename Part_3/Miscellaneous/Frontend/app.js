/*
let arr = [1, 2, 3];
arr.sayHello = () => {
    console.log("Hello, i am arr");
}

let arr2 = [1, 2, 3];
arr2.sayHello = () => {
    console.log("Hello, i am arr");
}

*/
//-----------Factory Function-------------
/*
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`hi my name is ${this.name}`);
        }
    }
    return person;
}

let p1 = PersonMaker("Adam", 25); //(copy-1) //Each object have its own copy 
let p2 = PersonMaker("Eve", 22);  //(copy-2)
p1.talk();
p2.talk();

*/

//---------------New Operator------------
//by Constructors
/*
function Person(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi my name is ${name}`);
        },
    };

    return person;
}


Person.prototype.talk = function () {
    console.log(`Hi , my name is ${this.name}`);
}


let p1 = new Person("Adam", 25);  //Both are refer to the same copy
let p2 = new Person("eve", 25);


p1.talk();
p2.talk();
*/

//-----------Classses-------------
/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hey my name is ${this.name}`);
    }
}


let p1 = new Person("Adam", 28);
document.writeln(p1.name);
*/


//------------Inheritance------------

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`My name is ${this.name}`);
    }
}

/*
class Students {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    talk() {
        console.log(`Hey my name is ${this.name}`);
    }
}
class Teacher {
    constructor(name, age, sub) {
        this.name = name;
        this.age = age;
        this.sub = sub;
    }

    talk() {
        console.log(`Hey my name is ${this.name}`);
    }
}
*/
/*
class Students extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

//Both classes propertey have repeat

let stu1 = new Students('adam', 25, 90);
console.log(stu1.name);


stu1.talk();
*/


//--------------Mammal Example--------
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "Warm-Blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class dog extends Mammal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("woooooooooooo");
    }
}

class cat extends Mammal {
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("Meoewwwwwwwwwwww");
    }
}

let dog1 = new dog("tuffie");