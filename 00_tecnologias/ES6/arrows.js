let oPrueba = {
    precio: 12,
    iva: 1.16
};

// Sin arrows no funciona
// oPrueba.calculaIvaAsync = function () {
//     setTimeout (function() {
//         let precioFinal = this.precio * this.iva;
//         console.log(`El precio final es ${precioFinal}`);
//     }, 1000)
// }

// Con arrows si
oPrueba.calculaIvaAsync = function () {
    setTimeout (() => {
        let precioFinal = this.precio * this.iva;
        console.log(`El precio final es ${precioFinal}`);
    }, 1000)
}

oPrueba.calculaIvaAsync();