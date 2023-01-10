import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

interface FormModel {
  nombre: string;
  dni: string;
  estado_civil: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter<FormModel>();

  model: FormModel = {
    nombre: '',
    dni: '',
    estado_civil: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.model);
      this.formSubmit.emit(form.value);
      form.reset();
    }
  }
}
