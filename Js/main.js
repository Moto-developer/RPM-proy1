const openmodal = document.querySelector('.hero-cta');
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.modal-close');

const usu2 = document.getElementById('usuario2');
const password2 = document.getElementById('contraseña2');

console.log(usu2);
console.log(password2);
openmodal.addEventListener('click', function abrir(){
    modal.classList.add('modal--show');
});

closemodal.addEventListener('click',function cerrar(){
    modal.classList.remove('modal--show');
});

const openmodal2 = document.querySelector('.hero-cta2');
const modal2 = document.querySelector('.modal-2');
const closemodal2 = document.querySelector('.modal-close-2');


openmodal2.addEventListener('click', function abrir2(){
    modal.classList.remove('modal--show');
    modal2.classList.add('modal--show-2');
});

closemodal2.addEventListener('click',function cerrar2(){
    modal2.classList.remove('modal--show-2');
});

const openmodal3 = document.getElementById('hero-cta3');

openmodal3.addEventListener('click', function abrir2(){
    modal.classList.remove('modal--show');
    modal2.classList.add('modal--show-2');
});

closemodal2.addEventListener('click',function cerrar2(){
    modal2.classList.remove('modal--show-2');
});

// const usuario = "adso2556678";
// const password = "adso2023"

// let usu = prompt('ingrese el usuario');

// let contra = prompt('ingrese la contraseña');

// if(usu !== usuario && contra !== password){
//     alert('no puedes ingresar')
// }

// else if(usu == usuario && contra == password){
//     alert('bienvenido');

// }

// const usu = 'adso2556678';
// const contra = 'adso2023';
// let i = 0;

// do{

// function iniciosesion() {
//     // Obtener los valores de los campos de entrada
//     let usuario = document.getElementById('usuario').value;
//     let password = document.getElementById('contraseña').value;

//     // Verificar si los campos están vacíos
//     if (usuario === '' || password === '') {
//       alert('Por favor, ingresa el usuario y la contraseña.');
//       // return false;
//       console.log(false)
//     }

//     // Verificar si las credenciales son correctas
//     if (usuario === usu && password === contra) {
//       alert('Inicio de sesión exitoso. ¡Bienvenido!');
//       // return true;
//       console.log(true);
//     } else {
//       alert('Credenciales inválidas. Por favor, intenta nuevamente.');
//       // return false;
//       console.log(false);
      
//     }
//   }
// i++;
// }
//   while(i < 3);
const posada = document.querySelector('.caja-contenedor');
const imagen = document.querySelector('.columna');
const nav = document.querySelector('.navbar');
const nav2 = document.querySelector('.navbar2');
const motoada = document.querySelector('.motoposadas');
const rutas = document.querySelector('.detalles');
const presupto = document.querySelector('.presupuesto');
// const usu = 'adso2556678';
// const contra = 'adso2023';

let rol1 = 'Bienvenido motero';
let rol2 = 'Bienvenido Motoposada';
let rol3 = 'Bienvenido Administrador';
// let i = 0;

// if (){
// do{
  let motero = document.getElementById('motero');
  let motposada = document.getElementById('mtoposada');
  let invitado = document.getElementById('invitado');
  let imagen2 = document.querySelector('.inicio');
  let imagen3 = document.querySelector('.motoposadas');
 
  // let irse = document.getElementById('cerrarsesion');
 
  


  let entrar = document.getElementById('entrar');
  entrar.addEventListener('click', iniciar);
 

function iniciar(){
  let usuario = document.getElementById('usuario').value;
  let password = document.getElementById('contraseña').value;

  if(usuario === ""){
    alert('no se admiten espacios en blanco');
  }
  else{

  // Verificar si las credenciales son correctas
  if (usuario === 'motoviajero' || usuario === usu2.value && password === 'adso2023' || password === password2.value) {
    alert('Inicio de sesión exitoso. ¡Bienvenido!');
    modal.classList.remove('modal--show');
    console.log(true);
 
    // nav2.children[0].textContent = 'Motero';
    // nav2.children[1].textContent = 'Motoposada';
    // nav2.children[2].textContent = 'Invitado';
    // nav2.children[3].textContent = 'Cerrar Sesion';
  

    // motero.addEventListener('click', motero1)

// function motero1(){
  document.querySelector('.content h3').textContent = rol1;
  document.querySelector('.presupuesto h1').textContent= 'Conoce El Presupuesto De Tu Viaje';
  document.querySelector('.detalles h1').textContent= 'Rutas Mas Realizadas';
  nav.children[0].textContent = 'Rutas';
  nav.children[1].textContent = 'Motoposadas';
  nav.children[2].textContent = 'Presupuesto';
  nav.children[3].textContent = '';
  nav.children[4].textContent = '';
  nav.children[5].textContent = 'Cerrar Sesion';
  // nav2.children[0].textContent = 'Motero';
  // nav2.children[1].textContent = 'Motoposada';
  // nav2.children[2].textContent = 'Invitado';
  // nav2.children[3].textContent = 'Cerrar Sesion';


  imagen2.style.backgroundImage = "url(../img/icon-1.jpg)";
  imagen.children[0].children[0].src = '../img/posada-1-1.jpg';
  imagen3.style.backgroundImage = "url(../img/posada-1.jpg)";
  rutas.children[1].children[0].children[0].src = '../img/ruta-1.jpg';
  rutas.children[1].children[0].children[1].textContent = 'Ruta a Bogotá';
  rutas.children[1].children[0].children[2].textContent = 'En Esta Ruta Encontraras Muchas Zonas Montañosas';
  rutas.children[1].children[1].children[0].src = '../img/ruta-2.jpg';
  rutas.children[1].children[1].children[1].textContent = 'Ruta a Medellín';
  rutas.children[1].children[1].children[2].textContent = 'En Esta Ruta Se Podran Ver Pueblitos Muy Bonitos';
  rutas.children[1].children[2].children[0].src = '../img/ruta-3.jpg';
  rutas.children[1].children[2].children[1].textContent = 'Ruta a Popayán';
  rutas.children[1].children[2].children[2].textContent = 'En Esta Ruta Podras Ver Paisajes Muy Bonitos Y Atardeceres';
  presupto.children[1].children[0].children[1].textContent = '$30 Aproximado';
  presupto.children[1].children[1].children[1].textContent = '$40 Aproximado';
  presupto.children[1].children[2].children[1].textContent = '$30 Aproximado';
// }

// motposada.addEventListener('click', motero2)

// function motero2(){
//   document.querySelector('.content h3').textContent = rol2;
//   document.querySelector('.detalles h1').textContent= 'Rutas Donde Hay Motoposadas';
//   document.querySelector('.presupuesto h1').textContent= 'Presupuesto Para Una Motoposada';
//   imagen.children[0].children[0].src = '../img/mpsada-1.jpg';
//   nav.children[0].textContent = 'Rutas';
//   nav.children[1].textContent = 'Ubicación';
//   nav.children[2].textContent = 'Presupuesto';
//   nav.children[3].textContent = '';
//   nav.children[4].textContent = '';
//   nav2.children[0].textContent = 'Motero';
//   nav2.children[1].textContent = 'Motoposada';
//   nav2.children[2].textContent = 'Invitado';
//   nav2.children[3].textContent = 'Cerrar Sesion';
//   imagen2.style.backgroundImage = "url(../img/icon-2.jpg)";
// }

// invitado.addEventListener('click', motero4)

// function motero4(){
//   document.querySelector('.content h3').textContent = rol3;
//   nav.children[0].textContent = 'Rutas';
//   nav.children[1].textContent = 'Motoposada';
//   nav.children[2].textContent = 'Presupuesto';
//   nav.children[3].textContent = 'Iniciar Sesion';
//   nav.children[4].textContent = 'Registrarse';
//   nav2.children[0].textContent = 'Motero';
//   nav2.children[1].textContent = 'Motoposada';
//   nav2.children[2].textContent = 'Invitado';
//   nav2.children[3].textContent = 'Cerrar Sesion';
//   imagen.children[0].children[0].src = '../img/img-fondo2.jpg';
//   imagen2.style.backgroundImage = "url(../img/icon-4.jpg)";
// }




  } 

 else if (usuario === 'motoposada' || usuario === usu2.value && password === 'adso2023' || password === password2.value) {
    alert('Inicio de sesión exitoso. ¡Bienvenido!');
    modal.classList.remove('modal--show');
    console.log(true);

    // motposada.addEventListener('click', motero2)

// function motero2(){
  document.querySelector('.content h3').textContent = rol2;
  document.querySelector('.content p').textContent = 'En este apartado podrar Registrar tus Motoposadas'
  document.querySelector('.detalles h1').textContent= 'Motoposadas Mas Populares';
  document.querySelector('.presupuesto h1').textContent= 'Presupuesto De Tu Motoposada';
  imagen.children[0].children[0].src = '../img/posada-2.jpg';
  nav.children[0].textContent = 'Reseñas';
  nav.children[1].textContent = 'Sobre Mi';
  nav.children[2].textContent = 'Presupuesto';
  nav.children[3].textContent = '';
  nav.children[4].textContent = '';
  nav.children[5].textContent = 'Cerrar Sesion';
  motoada.children[0].textContent = 'MI MOTOPOSADA';
  motoada.children[1].children[1].children[0].textContent = 'Sobre Mi Motoposada';
  rutas.children[1].children[0].children[0].src = '../img/ruta-5.jpg';
  rutas.children[1].children[0].children[1].textContent = 'Motoposada En Cartagena';
  rutas.children[1].children[0].children[2].textContent = 'Esta Motoposada LLeva 20 Años Al Servicio De Los Motoviajeros';
  rutas.children[1].children[1].children[0].src = '../img/ruta-4.jpg';
  rutas.children[1].children[1].children[1].textContent = 'Motoposada En Santander';
  rutas.children[1].children[1].children[2].textContent = 'Esta Motoposada LLeva 5 Años Al Servicio De Los Motoviajeros';
  rutas.children[1].children[2].children[0].src = '../img/ruta-6.jpg';
  rutas.children[1].children[2].children[1].textContent = 'Motoposada En Pasto';
  rutas.children[1].children[2].children[2].textContent = 'Esta Motoposada LLeva 10 Años Al Servicio De Los Motoviajeros';
  
  presupto.children[1].children[0].children[0].textContent = 'Alimentacion';
  presupto.children[1].children[1].children[0].textContent = 'Mantenimiento';
  presupto.children[1].children[2].children[0].textContent = 'Servicios';

  // nav2.children[0].textContent = 'Motero';
  // nav2.children[1].textContent = 'Motoposada';
  // nav2.children[2].textContent = 'Invitado';
  // nav2.children[3].textContent = 'Cerrar Sesion';
  imagen2.style.backgroundImage = "url(../img/icon-8.jpg)";
  imagen3.style.backgroundImage = "url(../img/mpsada-1.jpg)";
// }
  
 }

 
 else if (usuario === 'admin' || usuario === usu2.value && password === 'adso2023' || password === password2.value) {
  alert('Inicio de sesión exitoso. ¡Bienvenido!');
  modal.classList.remove('modal--show');
  console.log(true);
  // nav2.children[0].textContent = 'Motero';
  // nav2.children[1].textContent = 'Motoposada';
  // nav2.children[2].textContent = 'Invitado';
  // nav2.children[3].textContent = 'Cerrar Sesion';

  // invitado.addEventListener('click', motero4)

  // function motero4(){
    document.querySelector('.content h3').textContent = rol3;
    document.querySelector('.detalles h1').textContent= 'Nuevas Solicitudes';
    document.querySelector('.presupuesto h1').textContent= 'Estadisticas';
    nav.children[0].textContent = 'Solicitudes';
    nav.children[1].textContent = 'Eventos';
    nav.children[2].textContent = 'Estadisticas';
    nav.children[3].textContent = '';
    nav.children[4].textContent = '';
    nav.children[5].textContent = 'Cerrar Sesion';
    motoada.children[1].children[1].children[0].textContent = 'Revisa Las Solicitudes de Estas Motoposadas';
    document.querySelector('.content p').textContent = 'Aqui estan las Nuevas PQRS De los Usuarios';
    motoada.children[0].textContent = 'NUEVOS EVENTOS';
    motoada.children[1].children[1].children[0].textContent = 'Sobre Este Evento';
    rutas.children[1].children[0].children[0].src = '../img/icon-9.jpg';
    rutas.children[1].children[0].children[1].textContent = 'Motoposada';
    rutas.children[1].children[0].children[2].textContent = 'Solicitud Para Una Nueva Motoposada';
    rutas.children[1].children[1].children[0].src = '../img/icon-10.jpg';
    rutas.children[1].children[1].children[1].textContent = 'Motoviajero';
    rutas.children[1].children[1].children[2].textContent = 'Solicitud De Cambio De Documentos';
    rutas.children[1].children[2].children[0].src = '../img/icon-11.jpg';
    rutas.children[1].children[2].children[1].textContent = 'Reclamo';
    rutas.children[1].children[2].children[2].textContent = 'Solicitud De PQRS';
    presupto.children[1].children[0].children[0].textContent = 'Moteros Nuevos';
    presupto.children[1].children[0].children[1].textContent = '60%';
    presupto.children[1].children[0].children[2].children[2].textContent = '';
    presupto.children[1].children[0].children[2].children[3].textContent = '';
    presupto.children[1].children[0].children[3].textContent = 'Ver Mas';
    presupto.children[1].children[1].children[0].textContent = 'Motoposadas Nuevas';
    presupto.children[1].children[1].children[1].textContent = '30%';
    presupto.children[1].children[1].children[2].children[2].textContent = '';
    presupto.children[1].children[1].children[2].children[3].textContent = '';
    presupto.children[1].children[1].children[3].textContent = 'Ver Mas';
    presupto.children[1].children[2].children[0].textContent = 'Eventos Realizados';
    presupto.children[1].children[2].children[1].textContent = '10%';
    presupto.children[1].children[2].children[2].children[2].textContent = '';
    presupto.children[1].children[2].children[2].children[3].textContent = '';
    presupto.children[1].children[2].children[3].textContent = 'Ver Mas';
  
    // nav2.children[0].textContent = 'Motero';
    // nav2.children[1].textContent = 'Motoposada';
    // nav2.children[2].textContent = 'Invitado';
    // nav2.children[3].textContent = 'Cerrar Sesion';
    imagen.children[0].children[0].src = '../img/posada-3-3.jpg';
    imagen2.style.backgroundImage = "url(../img/icon-6.jpg)";
    imagen3.style.backgroundImage = "url(../img/posada-3.jpg)";
  // }
  

 }
  
  else  {
    alert('Credenciales inválidas. Por favor, intenta nuevamente.');
    console.log(false);
  }

  }
  // i++;
  }

// }while(i <= 3);

// }




// let escoger = document.getElementById('escoger');
// escoger.addEventListener('click', roles);


// function roles() {
//   let nuevo = parseInt(prompt('¿Qué tipo de motero eres? (1: Motero  2: Motoposada o 3: Invitado)'));

//   while (nuevo !== 1 && nuevo !== 2 && nuevo !== 3) {
//     alert('Ese número no es válido');
//     nuevo = parseInt(prompt('¿Qué tipo de motero eres? (1, 2 o 3)'));
//   }

//   if (nuevo === 1) {
//     document.querySelector('.content h3').textContent = rol1;
//     document.querySelector('.presupuesto h1').textContent= 'Conoce El Presupuesto De Tu Viaje';
//     document.querySelector('.detalles h1').textContent= 'Motoposadas en tu ruta';
//     nav.children[0].textContent = 'Rutas';
//     nav.children[1].textContent = '';
//     nav.children[2].textContent = 'Garaje';
//     nav.children[3].textContent = 'Iniciar Sesion';
//   } else if (nuevo === 2) {
//     document.querySelector('.content h3').textContent = rol2;
//     document.querySelector('.detalles h1').textContent= 'Rutas Donde Hay Motoposadas';
//     document.querySelector('.presupuesto h1').textContent= 'Presupuesto Para Una Motoposada';
//     imagen.children[0].children[0].src = '../img/mpsada-1.jpg';
//     nav.children[0].textContent = '';
//     nav.children[1].textContent = 'Ubicación';
//     nav.children[2].textContent = 'Motoposada';
//     nav.children[3].textContent = 'Iniciar Sesion';
//   } else if (nuevo === 3) {
//     document.querySelector('.content h3').textContent = rol3;
//     nav.children[0].textContent = 'Rutas';
//     nav.children[1].textContent = 'Motoposada';
//     nav.children[2].textContent = 'Presupuesto';
//     nav.children[3].textContent = '';
//     nav.children[4].textContent = 'Registrarse';
//   }
// }

// let motero = document.getElementById('motero');
// let motposada = document.getElementById('mtoposada');
// let invitado = document.getElementById('invitado');

// motero.addEventListener('click', motero1)

// function motero1(){
//   document.querySelector('.content h3').textContent = rol1;
//   document.querySelector('.presupuesto h1').textContent= 'Conoce El Presupuesto De Tu Viaje';
//   document.querySelector('.detalles h1').textContent= 'Motoposadas en tu ruta';
//   nav.children[0].textContent = 'Rutas';
//   nav.children[1].textContent = '';
//   nav.children[2].textContent = 'Garaje';
//   nav.children[3].textContent = 'Iniciar Sesion';
// }

// motposada.addEventListener('click', motero2)

// function motero2(){
//   document.querySelector('.content h3').textContent = rol2;
//   document.querySelector('.detalles h1').textContent= 'Rutas Donde Hay Motoposadas';
//   document.querySelector('.presupuesto h1').textContent= 'Presupuesto Para Una Motoposada';
//   imagen.children[0].children[0].src = '../img/mpsada-1.jpg';
//   nav.children[0].textContent = '';
//   nav.children[1].textContent = 'Ubicación';
//   nav.children[2].textContent = 'Motoposada';
//   nav.children[3].textContent = 'Iniciar Sesion';
// }

// invitado.addEventListener('click', motero4)

// function motero4(){
//   document.querySelector('.content h3').textContent = rol3;
//   nav.children[0].textContent = 'Rutas';
//   nav.children[1].textContent = 'Motoposada';
//   nav.children[2].textContent = 'Presupuesto';
//   nav.children[3].textContent = '';
//   nav.children[4].textContent = 'Registrarse';
// }



     


