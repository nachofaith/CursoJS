

let nombre = "Killua";
let anime = "Hunter x";
let edad = 14;

let personaje = {
    nombre,
    anime,
    edad,
};

console.log(personaje);
console.log(personaje.nombre);

personaje.edad = 13;
let llave = 'edad';
personaje[llave];

delete personaje.anime;

console.log(personaje)

