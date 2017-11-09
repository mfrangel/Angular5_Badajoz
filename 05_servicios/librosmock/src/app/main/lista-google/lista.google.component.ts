import { element } from 'protractor';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-google',
  templateUrl: './lista.google.component.html',
  styleUrls: ['./lista.google.component.css']
})
export class ListaGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
  }

  buscarPromesa() {
    this.http.get(this.sURL + this.sClave)
      .toPromise()
      .then(
        // Response OK
        (response) => {
          const aItems = response.json().items;
          aItems.forEach(item => {
            this.aLibros.push(item.volumeInfo.title);
          });
          console.log('Respuesta recibida: ' + JSON.stringify(response.json()));
        },
        // Response KO
        (response) => {
          console.log(response);
        }
      );
  }

  buscarReactive() {
    this.http.get(this.sURL + this.sClave)
    .subscribe(
      // Response OK
      (response) => {
        const aItems = response.json().items;
        aItems.forEach(item => {
          this.aLibros.push(item.volumeInfo.title);
        });
        console.log('Respuesta recibida: ' + JSON.parse(response.json()));
      },
      // Response KO
      (response) => {
        console.log(response);
      }
    );
  }
}
