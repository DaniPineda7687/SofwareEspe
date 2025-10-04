import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})
export class CharacterAddComponent {
  nombre = signal('');
  poder = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if(!this.nombre() || !this.poder() || this.poder()<0){
      return;
    }

    const newCharacter: Character = {
      id: 10000,
      nombre: this.nombre(),
      poder: this.poder(),
    }

    //this.characters.update((list)=>[...list, newCharacter]);
    console.log(newCharacter);
    this.resetFields()
  }

  resetFields() {
    this.nombre.set('');
    this.poder.set(0);
  }




}
