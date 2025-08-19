/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age:number;
    address:Address;
    //funciones con este formato porque es mas facil cambiarle los parametros
    showAddress:() => string;
}

//se aconseja hacerle otra inmterface a los objetos internos
interface Address {
    street:string;
    country:string;
    city:string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};