import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  // mandar a traer la informacion del padre al hijo es por medio de una funcion input
  // volverla obligatoria con el .required
  characters = input.required<Character[]>()

  listName = input.required<string>();

}
