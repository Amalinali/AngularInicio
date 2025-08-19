const skills:string[] = [
    'Bash',
    'Counter',
    'Healing'
]
//aqui ya se esta rompiendo la regla de que sean solo strings
const strider2 = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}


//INTERFACES SIRVEN PARA DEFINIR LA ESTRUCTURA DE UN OBJETO/TIPAR ESTRUCTURA LITERALES
//para eso usamos interfaces 
//interfaces no tienen representacion fisica en javascript
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

console.table(strider);


export {};