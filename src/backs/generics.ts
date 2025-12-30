import { printObject, genericFunction } from "./../generics/generics";
import { Hero, Villain } from "./../interfaces";

printObject({ name: "Juanma", age: 23 });

// console.log( genericFunction("Hello World").toUpperCase() );
// console.log( genericFunction(23).toFixed(2) );
// console.log( genericFunction( new Date() ).getDay() );
const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston",
    dangerLevel: 130
};

console.log( genericFunction<Villain>(deadpool).name );  