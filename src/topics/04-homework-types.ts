
//deberes - implementar la interface superhero pa que tire lo de abajo
interface SuperHero{
    name: string;
    age: number;
    address: {
        calle: string,
        pais: string,
        ciudad: string
    };
    showAddress: () => string;
}

interface Address{
    calle: string;
    pais: string;
    ciudad: string;
}

//otra manera pa lo mismo
interface SuperHero2{
    name: string;
    age: number;
    address: Address;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

const address = superHeroe.showAddress();
console.log( address );




export {};