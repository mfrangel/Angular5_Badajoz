import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {
  public sTitle: string;

  constructor() { }

  ngOnInit() { // se ejecuta automaticamente al iniciar el componente. Aqui es donde se inicializan las variables.
    this.sTitle = 'Directivas Angular';

  }

}
