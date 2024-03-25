function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320){
        return '8K';
    }   else if (ancho >= 3840 && alto >= 2160) {
        return '4K'
    }   else if (ancho >= 2550 && alto >= 1440) {
        return 'WQHD';
    }   else {
        return false;
    }

}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);