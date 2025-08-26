//Decorador es una funcion experimental 
//necesita un constructor pára ser decorador de clases
function classDecorator<T extends { new (...arg:any[]): {} }>(
    constructor: T
) {
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';
    
    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);

