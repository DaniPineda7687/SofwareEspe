import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styles: ``
})
export class CharacterAdd {
  nombre = signal('');
  poder = signal(0);
  characters = input.required<Character[]>()
  newCharacter = output<Character>();

  addCharacter() {
    if(!this.nombre() || !this.poder() || this.poder()<0){
      return;
    }

    const newObjectCharacter: Character = {
      id: this.characters.length + 1, 
      nombre: this.nombre(),
      poder: this.poder(),
    }

    console.log(newObjectCharacter)

    this.newCharacter.emit(newObjectCharacter);

    // this.characters().push(newCharacter);
    // 

    this.resetFields()
  }

  resetFields(){
    this.nombre.set('');
    this.poder.set(0);
  }
}
