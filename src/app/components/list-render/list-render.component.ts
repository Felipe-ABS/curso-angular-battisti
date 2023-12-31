import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  testes = [
    "1",
    "2",
    "3",
    "4",
    "5"
  ];

  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 5 },
    { name: "Tom", type: "Cat", age: 4 },
    { name: "Frida", type: "Dog", age: 2 },
    { name: "Bob", type: "Horse", age: 4 },
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 10
  };

  animalDetails = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo Animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

}
