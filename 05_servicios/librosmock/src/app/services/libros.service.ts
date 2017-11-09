import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular básico',
      'Aprende Angular',
      'Angular en 30 minutos',
      'Angular avanzado'
    ];
   }

  buscarLibros(clave: string) {
    return this.aLibros;
  }

  buscarLibrosAsync(clave: string) {
    return new Promise(
      // function (resolve, reject) {}
      (resolve, reject) => {
        console.log('Timeouttt');
        setTimeout(
          resolve(JSON.stringify(this.aLibros)), 100000
        );
        console.log('Timeouttt 2');
      }
    );

    // return setInterval(() => {
    //   return this.aLibros;
    // }, 1000);
  }

}
