import { UserModel } from './../../models/users';
import { DepartamentoModel } from './../../models/departments';
import { Component, OnInit } from '@angular/core';
import { Printer, PrinterModel } from './../../models/printers';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aPrinters: Array<Printer>;
  aDepartamentos: Array<DepartamentoModel>;
  mostrarFinal: boolean;

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.aPrinters = [new PrinterModel(1, 'HP', 'Láser'),
                      new PrinterModel(2, 'Brother', 'Láser'),
                      {id: 3, modelo: 'Xerox', tipo: 'Tinta'}];

    this.aDepartamentos = [new DepartamentoModel(1, 'Ventas'),
                           new DepartamentoModel(2, 'Desarrollo'),
                           new DepartamentoModel(3, 'Marketing'),
                           new DepartamentoModel(4, 'Dirección'),
                           new DepartamentoModel(5, 'Sistemas')];

    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}')]),
      impresora: new FormControl(),
      color: new FormControl({value: true}),
      claro: new FormControl(),
      departamento: new FormControl()
    });

    console.log(this.formulario);

  }

  avisarPrint() {
    this.mostrarFinal = false;
  }

  avisarDepartamento() {
    this.mostrarFinal = false;
  }

  enviar() {
    this.mostrarFinal = true;
  }

  borrar () {
    this.formulario.reset();
    // this.ngOnInit();
  }
}
