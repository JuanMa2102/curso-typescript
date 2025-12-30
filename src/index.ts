import { getPokemon } from "./generics/get-pokemon";

// console.log( getPokemon() ); // getPokemon();
getPokemon(1)
    .then( pokemon => console.log( pokemon.sprites.front_default ) )
    .catch( err => console.log( err ) )
    .finally( () => console.log("Finally") );