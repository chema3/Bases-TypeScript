
export class Person {
    //public name :string;
    //private address :string;

    constructor (
        public name :string,
        public lastName :string,
        private address :string = 'No address'
    ){}
}

/*export class Hero extends Person {
    constructor(
        public alterEgo :string,
        public age :number,
        public realName :string,
    ){
        super(realName, 'Apaxco')
    }
}*/

export class Hero {
    //public person : Person;
    constructor(
        public alterEgo :string,
        public age :number,
        public realName :string,
        public person :Person,
    ){
       //this.person = new Person(realName) 
    }
}

const narco = new Person('Chema','Venegas','Apaxco');
const iroman = new Hero('Emma',45,'Venegas',narco);

console.log(iroman);