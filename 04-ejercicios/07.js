function precioCompleto(precio, impuesto) {

    // let iva = precio * impuesto;
    // let total = precio + iva;
    // return total;
    return precio + precio * impuesto;

}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);
