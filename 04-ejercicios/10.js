let longitud = 7;

function crearArray(n) {
if (n <= 0) {
    return [];
}

    let arreglo=[];
    for (i=0;i<n;i++) {
        arreglo[i]=i+1;
    }
    return arreglo;
}

let resultado = crearArray(longitud);
console.log(resultado);