import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  sNombre: string;
  nNumber: number;
  nPrecio: number;
  dFecha: Date;
  oLibro: {autor: string; libro: string};

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe pérez';
    this.nNumber = 34.8734;
    this.nPrecio = 35.50;
    this.dFecha = new Date();
    this.oLibro = {autor: 'Cervantes', libro: 'El Quijote'};
    }
}