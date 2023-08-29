import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    console.log("Ativando Service");
    console.log(`O Animal '${animal.name}' foi excluido da lista!`);
    // Filtrando os animais da lista "animals"
    // O (a) é onde foi guardado todos os dados da lista
    return animals.filter((a) => animal.name !== a.name);
  }
}
