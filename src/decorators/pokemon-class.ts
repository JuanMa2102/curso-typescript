function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean ):Function=> {
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
}

const blockPrototype = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

// factory decorator
function ChekkValidPokemonId():Function {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if ( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod( id );
            }
        }
    }
}


@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/';
    constructor(public id: number, public name: string) {}

    @ChekkValidPokemonId()
    savePokemonToDB( id: number ){
        console.log(`Saving to DB ${ id }`);
    }
}