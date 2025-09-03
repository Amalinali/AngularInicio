import { Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

// definir que nuestro componente emite algo, EN ESTE CASO QUEREMOS EMITIR UN PERSONAJE DESDE ESTE COMPONENTE
newCharacter = output<Character>();


addCharacter() {
  if( !this.name() || !this.power() || this.power() <= 0 ){
    return;
  }

  const newCharacter: Character = {
    id: Math.floor(Math.random() * 1000),
    name: this.name(),
    power: this.power()
  }

  //
  this.newCharacter.emit(newCharacter);

  // this.characters().push(newCharacter); //no usar esto para actualizar señales
  this.resetFiels();

}

resetFiels() {
  this.name.set('');
  this.power.set(0);
}



}
