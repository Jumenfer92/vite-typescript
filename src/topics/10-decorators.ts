//DECORATOR

//es un caos
function classDecorator(){
  //  constructor: any
}

//@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc1231';

    print(){
        console.log('Buenas tardes')
    }
}

console.log(SuperClass);
const clasita = new SuperClass();
console.log(clasita);

