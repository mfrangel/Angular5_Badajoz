import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class GoogleService {

  aLibros: Array<string>;
  sURL: string;

  constructor(public http: Http) {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
   }

  buscarLibros(clave: string) {
    return this.http.get(this.sURL + clave)
    .map(
      // Response OK
      (response) => {
        return this.extractTitles(response);
      });
  }

  private extractTitles(response: Response) {
    if (response.json().totalItems > 0) {
      return response.json().items.map(
        book => book.volumeInfo.title
      );
    } else {
      return ['No se ha encontrado ningún libro'];
    }

  }

}
