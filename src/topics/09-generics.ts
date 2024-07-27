//GENERICS

export function queTipoYe<T>(argument: T): T {
   
    return argument; 
}

const chorizo = queTipoYe<string>('Helloworld');
const soynumero = queTipoYe<number>(100);
const soyarray = queTipoYe<number[]>([1,2,3,4,5]);

console.log(chorizo.split(' '));
console.log(soynumero.toFixed());
console.log( soyarray.join('-'));