import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() color: string = '';

  constructor() { 
    console.log(this.name);
    console.log(this.color);
  }
}
