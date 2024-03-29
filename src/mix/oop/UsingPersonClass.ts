 import {Person} from './PersonClass.ts';

 export const personExample = ()=>{
 // Create an instance of the 'Person' class
 const person1 = new Person("Alice", 30);
  
 // Access properties
 console.log(person1.name); // Output: Alice
 console.log(person1.age);  // Output: 30

 person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
}