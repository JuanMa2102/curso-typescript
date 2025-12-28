import { printObject, genericFunction } from "./generics/generics";

printObject({ name: "Juanma", age: 23 });

console.log( genericFunction("Hello World").toUpperCase() );
console.log( genericFunction(23).toFixed(2) );
console.log( genericFunction( new Date() ).getDay() );