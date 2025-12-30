function printToConsole(constructor: Function) {
    console.log(constructor);
}

@printToConsole
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/';
    constructor(public id: number, public name: string) {}
}