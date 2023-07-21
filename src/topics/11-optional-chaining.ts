export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Emmanuel'
}

const passenger2: Passenger = {
    name: 'Marcela',
    children: ['Joaquin','Sofia'],
}

const printChildren = (passenger: Passenger): number =>{
    //const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren);

    return howManyChildren;
}

printChildren(passenger1);