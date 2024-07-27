//OPTIONAL CHAINING

export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger ={
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
}

const printChildren = (passenger: Passenger ) => {

    const numGuajes = passenger.children?.length || 0;
    //const numGuajes = passenger.children!.length;

    console.log(passenger.name, numGuajes);    
}

printChildren(passenger1);
printChildren(passenger2);
