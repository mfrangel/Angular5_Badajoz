import { UserModel } from './../../models/users';
import { DepartamentoModel } from './../../models/departments';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Printer, PrinterModel } from './../../models/printers';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sName: string;
  aPrinters: Array<Printer>;
  impresoraSeleccionada: Printer;
  aDepartamentos: Array<DepartamentoModel>;
  departamentoSeleccionado: DepartamentoModel;
  print: string;
  isColor: boolean;
  isClaro: boolean;
  user: UserModel;
  @ViewChild('formulario') formulario: any;
  mostrarFinal: boolean;

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
    this.impresoraSeleccionada = new PrinterModel(0, '', '');
    this.departamentoSeleccionado = new DepartamentoModel(0, '');
    this.user = new UserModel('', '', '');
    this.isColor = false;
    this.isClaro = false;

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
