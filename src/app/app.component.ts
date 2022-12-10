import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C5_T35_A2';

  arrayClientes: any[] = [];

  cliente: FormGroup;

  constructor(private fb: FormBuilder){
    this.cliente = this.fb.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mensaje: new FormControl('', Validators.required),
      respuesta: new FormControl('', Validators.pattern('5'))
    });
  }

  addCliente(): void{
    this.arrayClientes.push(this.cliente.value);
  }
}
