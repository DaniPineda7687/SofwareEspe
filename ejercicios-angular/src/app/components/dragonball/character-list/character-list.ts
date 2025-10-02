import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styles: ``
})
export class CharacterList {
  characters = input.required<Character[]>()
  listName = input.required<string>();
}
