
//DEFINICION DE UNA FUNCION NORMAL
function addNumbers(a:number, b:number):number{
return a+b;
}

//funcion de flecha
const addNumbersArrow = (a:number, b:number):string =>{
    //return (a+b).toString;

    //la forma mas actual de hacer lo mismo es asi:
    // el backtick nos permite hacer caracteres multilinea y templates literales
    // y la inyecccion de una expresion de javascript dentro del template literal
    return `${ a + b }`;
}


//Lo recomendado es colocar primero los obligatorios, luego los opcionales, luego los obligatorios con valor por defecto
function multiply(firstNumber:number, secondNumber?:number, base:number=2){
    return firstNumber * base;
}



//const result:number = addNumbers(1, 2);
//const result2:string = addNumbersArrow(1, 2);
//const multiplyResult:number = multiply(5);

//console.log({result, result2});

interface Character {
    name: string;
    hp: number;
    //para definir un metodo dentro de una interface
    showHp: () => void;
}


const healCharacter = (character:Character, amount:number) => {

    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        //template de stringm expresion propia de javascript, this se refiere a este objeto
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider,10);

strider.showHp();
export {};