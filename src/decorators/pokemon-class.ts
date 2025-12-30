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

@blockPrototype
@printToConsoleConditional( true )
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/';
    constructor(public id: number, public name: string) {}
}