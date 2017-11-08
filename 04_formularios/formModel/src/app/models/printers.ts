export interface Printer {
    id: string | number;
    modelo: string;
    tipo: string;
}

export class PrinterModel implements Printer {

    // Equivale a declarar los atributos e inicializarlos en el constructor
    constructor (public id: string | number,
        public modelo: string,
        public tipo: string) {
    }

}
