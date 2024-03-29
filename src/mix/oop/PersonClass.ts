// Define a class 'Person'
export class Person {
    // Properties
    name: string;
    age: number;
  
    // Constructor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
  }
  
 