//CLASSES
//en vez de export{}...

//version entendible
export class Person {
    public name: string;
    public lastname: string;
    public address: string;

    constructor(name?: string, lastname?:string, address?: string) {
        this.name = 'Pepin';
        this.lastname = 'da Veiga'
        this.address = 'Pindolas 33';
    }
}

//version guay
export class Person2{
    constructor (
        public name: string,
        public lastname: string,
        private address: string
    ){}
}



//HERENCIA
export class Hero extends Person {

    constructor(public alias: string, 
                public age: number,
                public realName: string
    ){
        super(realName, 'NewYork')
    }
}


// y PRIORIZAR COMPOSICION
export class Hero2{

    //public persona: Person;

    constructor(public alias: string,
                public age: number,
                public realName: string,
                public person: Person,
    ){
        //this.persona(realName, 'Pindolas')
    }
}


const officer = new Person('Cao Cao', 'Xu Chang');

const pepin = new Person('');
const tony = new Person ('Tony', 'Stark', 'New York');
const ironman = new Hero2('Ironman', 45, 'Tony', tony);

console.log(pepin.address)
console.log(pepin)

