
function addNumbers(a :number, b :number){
    return a + b;
}

function multiply(firstNumber :number, secondNumber? :number, base :number = 2) :number{
    return firstNumber * base;
}

//const result :number = addNumbers(1,2);
//const result3 :number = multiply(2,5,3);

//console.log({result},{result3});

interface Character {
    name : string;
    hp : number;
    showHp : () => void;
}

const healCharecter = (character :Character, amount :number) =>{
    character.hp += amount;
}

const strider :Character = {
    name :'emmanuel',
    hp : 50,
    showHp () {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharecter(strider,10);
healCharecter(strider,30);

strider.showHp();

export {};