import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  inspectionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inspectionForm = this.formBuilder.group({
      equipmentId: ['', Validators.required],
      hourMeter: ['', [Validators.required, Validators.min(0)]],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      observations: [''],
    });
  }

  ngOnInit() {}

  submitInspection() {
    if (this.inspectionForm.valid) {
      console.log(this.inspectionForm.value);
      // Aquí puedes manejar la lógica para enviar los datos del formulario
    } else {
      console.log('Formulario inválido');
    }
  }
}
