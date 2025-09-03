import { Component, signal, computed } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
})

export class DragonballPageComponent {


  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Picolo', power: 3000 },
    // { id: 3, name: 'Yamcha', power: 500 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });

  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    // this.characters().push(newCharacter); //no usar esto para actualizar señales
    this.characters.update((list) => [...list, newCharacter]);

  }

  resetFiels() {
    this.name.set('');
    this.power.set(0);
  }

}
