class Libro {

    constructor (autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrarAutor() {
        console.log(this.autor);
    }
}

class LibroTecnico extends Libro {

    constructor (autor, titulo, tema) {
        super(autor, titulo);
        this.tema = tema;
    }

    mostrar() {
        console.log(this);
    }
}

let oLibro  = new LibroTecnico("Pepe", "Angular", "Programacion");
oLibro.editorial = "Anaya";
oLibro.mostrar();