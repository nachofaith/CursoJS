const user = { id: 1 };

user.name = 'Nachin';
user.guardar = function () {
    console.log('Guardando', user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);



const user1 = Object.freeze({ id: 1}); // NO PERMITE CAMBIAR VALORES DEL OBJETO
const user1 = Object.seal({ id: 2}); //SEAL NO PERMITE AGREGAR PERO SI CAMBIAR UNA PROPIEDAD 
user1.name = 'ruben';
user1.id = 2;