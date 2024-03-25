//short-circuit


// Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = '';
let userName = nombre || 'Anonimo';

console.log(userName);

function fn1() {
    console.log('funcion 1');
    return true;
}

function fn2() {
    console.log('funcion 2');
    return false;
}

let x = fn1() && fn2();