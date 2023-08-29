import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  submittedName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitName(nameFromAttribute: string) : void {
    this.submittedName = nameFromAttribute;
  }

}
