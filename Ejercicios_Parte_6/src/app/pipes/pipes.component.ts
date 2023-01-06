import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  text: string = '';
  quantity: number = 0;
  type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
