import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contactForm: FormGroup | any;
  
  myField = new FormControl();

  constructor(
    private readonly fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    //this.onPatchValue();
    //this.onSetValue();
  }

  onPatchValue(): void {
    // Permite setear uno o varios valores del formulario
    this.contactForm.patchValue({
      name: 'John Doe',
      checkAdult: true,
      department: 'Sales',
      comment: 'This is a comment'
    });
  }

  onSetValue(): void {
    // Permite setear todos los valores del formulario
    this.contactForm.setValue({
      name: 'Fred Smith',
      checkAdult: true,
      department: 'Marketing',
      comment: 'This is a comment'
    });
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  initForm(): FormGroup | any {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      checkAdult: [false, Validators.requiredTrue],
      department: ['Select a department'],
      comment: ['', Validators.maxLength(100)],
    });
  }

}
