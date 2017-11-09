import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.aLibros =
      this.librosService.buscarLibros(this.sClave);
   
  }

}
