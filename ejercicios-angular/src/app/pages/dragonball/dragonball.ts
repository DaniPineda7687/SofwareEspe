import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id : number;
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css'
})
export class Dragonball {

  nombre = signal('');
  poder = signal(0)

  characters = signal<Character[]>([
    {id: 1, nombre: 'Goku', poder: 10000},
    {id: 2, nombre: 'Vegenta', poder: 5000},
    {id: 3, nombre: 'Cell', poder: 8000},
    {id: 4, nombre: 'Yamcha', poder: 500},
  ]);

  powerClass = computed(()=>{
    return {
      'text-danger' : true,
    };
  })

  addCharacter() {
    if(!this.nombre() || !this.poder() || this.poder()<0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters.length + 1,
      nombre: this.nombre(),
      poder: this.poder(),
    }

    // this.characters().push(newCharacter);
    this.characters.update((list)=>[...list, newCharacter]);

    this.resetFields()
  }

  resetFields(){
    this.nombre.set('');
    this.poder.set(0);
  }
}
