function cualEsMayor(a, b) {

    if (a > b) {
        console.log("el numero mayor es:", a);
    }else{
        console.log("el numero mayor es:", b);
    }
}

let mayor = cualEsMayor(5, 50);



//MEJORADA


function cualEsMayor2(a, b) {
    return (a > b) ? a : b;
}

let mayor2 = cualEsMayor2(5, 50);
console.log("El numero mayor es:", mayor2);