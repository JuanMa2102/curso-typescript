import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon(4, 'Charmander');
// (Pokemon.prototype as any).customName = 'Bulbasaur';

charmander.publicApi = 'https://otra-api.com/';
charmander.savePokemonToDB( 10 );