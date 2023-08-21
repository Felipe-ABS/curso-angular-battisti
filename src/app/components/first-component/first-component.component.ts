import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Felipe";
  age: number = 23;
  job = "Programador";
  hobbies = ["Programar", "Cantar", "Estudar"];
  car = {
    name: "Hyundai",
    year: 2012
  }

  constructor() { }

  ngOnInit(): void {
  }

}
