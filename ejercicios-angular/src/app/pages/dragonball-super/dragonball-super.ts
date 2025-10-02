import { Component, computed, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";


interface Character {
  id : number;
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {

  nombre = signal('');
  poder = signal(0)

  characters = signal<Character[]>([
    {id: 1, nombre: 'Goku', poder: 10000},
    {id: 2, nombre: 'Vegenta', poder: 5000},
    {id: 3, nombre: 'Cell', poder: 8000},
    {id: 4, nombre: 'Yamcha', poder: 500},
  ]);

  addCharacter() {
    if(!this.nombre() || !this.poder() || this.poder()<0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      nombre: this.nombre(),
      poder: this.poder(),
    }

    this.characters.update((list)=>[...list, newCharacter]);
    this.resetFields()
  }

  resetFields(){
    this.nombre.set('');
    this.poder.set(0);
  }
}
