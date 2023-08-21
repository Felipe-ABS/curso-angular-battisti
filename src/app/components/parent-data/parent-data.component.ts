import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // Input deve ser inicializado antes, ou na própria propriedade ou no construtor
  @Input() userData!: {email: string, role: string};

  constructor() { }

  ngOnInit(): void {
  }

}
