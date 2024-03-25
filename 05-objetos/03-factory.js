

 function crearUsuario(name, email) {

   return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave ...');
        },
     };

 };


 let user1 = crearUsuario('nachin','ruben.godoy@ngg.cl');
 let user2 = crearUsuario('pedro','otro@ngg.cl');

 console.log(user1,user2);