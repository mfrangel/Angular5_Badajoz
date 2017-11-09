import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-async',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaAsyncComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    // this.aLibros = this.librosService.buscarLibros(this.sClave);

    this.librosService.buscarLibrosAsync(this.sClave)
    .then(JSON.parse)
    .then(
      // Response OK
      (response) => {
        this.aLibros = response;
        console.log('Respuesta recibida: ' + response);
      },
      // Response KO
      (response) => {
        console.log(response);
      }
    );
  }

}
