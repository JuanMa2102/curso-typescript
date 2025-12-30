import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon(4, 'Charmander');
// (Pokemon.prototype as any).customName = 'Bulbasaur';

charmander.savePokemonToDB( -10 );