{
    
    var aDatos = [ {precio: 23},
    {precio: 45},
    {precio: 65},
    {precio: 85},]

}

aDatos.forEach(element => {
    let iva = 1.22;
    console.info("Precio final: " + element.precio + iva);
    console.log(` El precio es
    ${element.precio + iva}`);
}, this);

console.info(aDatos.length);