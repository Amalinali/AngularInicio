//CLASE NORMAL
// export class Person {
//      public name: string;
//      private address: string;

//      constructor(){
//           this.name =  'Denisse';
//           this.address = 'New York';
//      }
// }

// const ironman1 = new Person()

// console.log(ironman1.address);






// //
// export class Person2 {
//      public name: string;
//      private address: string;

//      constructor(name:string, address:string){
//           this.name =  name;
//           this.address = address;
//      }
// }

// const ironman2 = new Person2('Ironman', 'New York');

// console.log(ironman2);









//
export class Person {
     // public name: string;
     // private address: string;

     constructor(
          public firstName: string,
          public lastName: string,
          private address: string = 'No Address'
     ){}
}

// export class Hero extends Person {
     
//      constructor(
//           public alterEgo: string,
//           public age: number,
//           public realName:string
//      ){
//           super(realName, 'New York')
//      }
// }

export class Hero {
     
     public person: Person;

     constructor(
          public alterEgo: string,
          public age: number,
          public realName:string,
          public person: Person,
     ){
         // this.person = new Person(realName);
     }
}

const tony = new Person('Tony', 'Stark', 'New York');

const ironman3 = new Hero('Ironman', 45,'Tony', tony);

console.log(ironman3);





