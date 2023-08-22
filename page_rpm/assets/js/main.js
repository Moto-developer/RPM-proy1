//menu lateral


console.log('Los Usuarios son:')
console.log('"motoviajero"  ===>  adso2556678');
console.log('"motoposada"==> adso25566782');
console.log('"administrador" ==> adso2556678');


let side_menu= document.getElementById('menu_side');
let btn_open= document.getElementById('btn_open');
let body= document.getElementById('body');
btn_open.addEventListener('click', open_close_menu);

function open_close_menu(){
    body.classList.toggle('body_move');
    side_menu.classList.toggle('menu_side_move');

}

window.addEventListener('resize', function(){
    if(this.window.innerWidth>760){
        body.classList.remove('body_move');
        side_menu.classList.remove('menu_side_move');
    }
    if(this.window.innerWidth<760){
        body.classList.ass('body_move');
        side_menu.classList.add('menu_side_move');
    }
});

//fin menu lateral
//modal de incio de sesion

let btninicio= document.querySelector ('.btn_inicio');
let closeModal= document.querySelector('.closeModal');
let modal= document.querySelector('.modal');
let iniciarSesion= document.getElementById('iniciarSesion');

//Abrir modal Cerrar modal
btninicio.addEventListener('click', openModal);
closeModal.addEventListener('click', cerrarModal);
function openModal(){
    modal.classList.add('modal--show')
}
function cerrarModal(){
    modal.classList.remove('modal--show')
}

//fin modal de incio de sesion
//modal registro

let registrarse= document.getElementById('btn_open_registro');
registrarse.addEventListener('click', registro);

function registro(){
    modal.classList.remove('modal--show')
    let modal_registro= document.querySelector('.modal_registro');
    modal_registro.classList.add('modal--show');
    let closeRegistro= document.querySelector('#closeRegistro')
    closeRegistro.addEventListener('click',cerrarRegistro )

    let btn_registro= document.querySelector('#btn_registro')
    btn_registro.addEventListener('click', registrado)
    function registrado(){
        let registroUsuario= document.getElementById('registroUsuario').value;
        let registroContraseña= document.getElementById('registroContraseña').value;

        console.log(registroUsuario);

        alert('Registro exitoso')
        modal_registro.classList.remove('modal--show')
    }

    function cerrarRegistro (){
        modal_registro.classList.remove('modal--show')
    }
}


const texto1= document.querySelector('.title1');
const texto2= document.querySelector('.titulo2');
const texto3= document.querySelector('.title3');

console.log(`${texto1} ${texto2}`)

const imgtexto1=document.querySelector('.rutas').children[0];
const imgtexto2=document.querySelector('.moto_viajero').children[0];

const imgtexto3=document.querySelector('.moto_posada').children[0];






const tituloGaleria=document.querySelector('.container').children[0] ;






iniciarSesion.addEventListener('click' , login)

//usaurios
let motoPosada= document.getElementById('motoPosada');
let administrador= document.getElementById('administrador');
let usuarios= document.getElementById('moto__viajero');
let fondoHeader= document.getElementById('header');

let inUsuario= document.getElementById('usu');
let inContraseña=document.getElementById('contraseña');
function login(){
    
    if (inUsuario.value===""){
        alert('No se Admiten espacios en blanco')
    }

    else{
        if (inUsuario.value=='motoviajero' && inContraseña.value=='adso2556678' || inUsuario.value==registroUsuario.value && inContraseña==registroContraseña.value){
            console.log('iniciado')
            alert(`Bienvenido Motoviajero`)
            modal.classList.remove('modal--show')
            fondoHeader.style.backgroundImage="url('assets/img/fondo2.jpg')"
            let fondo= document.getElementById('uno');
            fondo.style.backgroundImage="url('assets/img/fondo2.jpg')"
            //quitar boton de inio se sesion
            btninicio.classList.add('ocultar');
            //pone el espacio del body
            let espacioBody= document.getElementById('body');
            espacioBody.classList.remove('espacioBody');
            let menu_side=document.getElementById('menu_side');
            menu_side.classList.add('mostrar');
            //cambio el contenido de los links
            let links=document.querySelector('.links');
            links.children[2].textContent='¿Que quieres hacer Hoy?'
            links.children[3].textContent='Como usar la app'
            links.children[1].classList.add('ocultar');
            links.children[0].classList.add('ocultar');
            //crear el h1 de bienvenido motoviajero tal
            let mensaje= document.createElement('h1');
            mensaje.textContent='Bienvenido Motoviajero';
            mensaje.classList.add('title');
            mensaje.classList.add('yellow');
            mensaje.style.color= 'white';
            let uno= document.getElementById('uno');
            console.log(uno)
            uno.appendChild (mensaje);
            let funciones= document.querySelector('.titleDos');
            funciones.classList.add('funciones')
            funciones.textContent= `¿Que quieres hacer hoy ? `
    
    
            
    
    
            //cambios de usaurio desde menu
           
            
            //-----------------------------------------------------------------------------------------
    
            //quitar los demas roles
            motoPosada.classList.add('ocultar');
            administrador.classList.add('ocultar');
    
            //--------------------------------------------------------
    
    
        
    
    
    
            
            texto1.textContent='Traza una Ruta'
            texto2.textContent='Buscar Motoviajeros'
            texto3.textContent='Buscar Motoposadas'
    
            
            imgtexto1.src=('assets/img/img1.jpg')
            imgtexto1.style.width='150px';
            imgtexto1.style.height='100px'
    
            
            imgtexto2.src=('assets/img/img2.jpg');
            imgtexto2.style.width='150px';
            imgtexto2.style.height='100px'
    
    
            
            imgtexto3.src=('assets/img/igm3.jpg');
            imgtexto3.style.width='150px';
            imgtexto3.style.height='100px'



            const wid1= document.querySelector('.fun .wid1');
            wid1.src=('assets/img/iwid1.jpg')
            wid1.style.backgroundImage="url('assets/img/iwid1.jpg')"


            tituloGaleria.textContent='Galeria del Motoviajero'

            
            
    
            
            
    
    
    
           
    
            // cambio de usuarios
    
    
    
            let cerrarSesion= document.getElementById('cerrarSesion');
            cerrarSesion.addEventListener('click', ()=>{
                alert('saliendo');
    
                
                location.href = "index.html";
    
    
            } ) 
    
            
            
        }
    
    
    
        else if(inUsuario.value=='motoposada' && inContraseña.value=='adso2556678' ){
    
            alert(`Bienvenido Motoposada`)
            modal.classList.remove('modal--show')
            fondoHeader.style.backgroundImage="url('assets/img/fondo3.jpg')"
            let fondo= document.getElementById('uno');
            fondo.style.backgroundImage="url('assets/img/fondo3.jpg')"
            //quitar boton de inio se sesion
            btninicio.classList.add('ocultar');
            //pone el espacio del body
            let espacioBody= document.getElementById('body');
            espacioBody.classList.remove('espacioBody');
      
            let menu_side=document.getElementById('menu_side');
            menu_side.classList.add('mostrar');
            //cambio el contenido de los links
            let links=document.querySelector('.links');
            links.children[2].textContent='¿Administra tus Motoposadas?'
            links.children[3].textContent='Como administrar tus motoposadas'
            links.children[1].classList.add('ocultar');
            links.children[0].classList.add('ocultar');
            //crear el h1 de bienvenido motoviajero tal
            let mensaje= document.createElement('h1');
            mensaje.textContent='Bienvenido MotoPosada';
            mensaje.classList.add('title');
            mensaje.classList.add('yellow');
            mensaje.style.color= 'white';
            let uno= document.getElementById('uno');  
            console.log(uno) 
            uno.appendChild (mensaje);
            let funciones= document.querySelector('.titleDos');
            funciones.classList.add('funciones')
            funciones.textContent= `Administra tus motoposadas `
    
    
            usuarios.classList.add('ocultar');
            administrador.classList.add('ocultar');
    
            //----------------------------------------------------
    
    
            texto1.textContent='Gestiona tu motoposada';
            texto2.textContent='Notificaciones';
            texto3.textContent='Calificacoines'
    
            imgtexto1.src=('assets/img/img4.jpg')
            imgtexto1.style.width='150px';
            imgtexto1.style.height='100px'
    
    
            imgtexto2.src=('assets/img/img5.jpg');
            imgtexto2.style.width='150px';
            imgtexto2.style.height='100px'
    
            imgtexto3.src=('assets/img/img6.png');
            imgtexto3.style.width='150px';
            imgtexto3.style.height='100px'


            //------------------

            const wid1= document.querySelector('.fun .wid1');
            wid1.src=('assets/img/iwid1.jpg')
            wid1.style.backgroundImage="url('assets/img/iwid2.jpg')"


            tituloGaleria.textContent='Galeria de Motoposada'
    
    
    
    
    
    
            
            cerrarSesion.addEventListener('click', ()=>{
                alert('saliendo');
    
                
                location.href = "index.html";
    
    
            } ) 
    
            
    
        }
    
        else if(inUsuario.value=='administrador' && inContraseña.value=='adso2556678' ){
    
            alert(`Bienvenido Administrador`);
            modal.classList.remove('modal--show')
            fondoHeader.style.backgroundImage="url('assets/img/fondo4.jpg')"
            let fondo= document.getElementById('uno');
            fondo.style.backgroundImage="url('assets/img/fondo4.jpg')"
            //quitar boton de inio se sesion
            btninicio.classList.add('ocultar');
            //pone el espacio del body
            let espacioBody= document.getElementById('body');
            espacioBody.classList.remove('espacioBody');
      
            let menu_side=document.getElementById('menu_side');
            menu_side.classList.add('mostrar');
            //cambio el contenido de los links
            let links=document.querySelector('.links');
            links.children[2].textContent='¿Administra RPM?'
            links.children[3].textContent='Como administrar RPM'
            links.children[1].classList.add('ocultar');
            links.children[0].classList.add('ocultar');
            //crear el h1 de bienvenido motoviajero tal
            let mensaje= document.createElement('h1');
            mensaje.textContent='Bienvenido usuario Administrador';
            mensaje.classList.add('title');
            mensaje.classList.add('yellow');
            mensaje.style.color= 'white';
            let uno= document.getElementById('uno');  
            console.log(uno) 
            uno.appendChild (mensaje);
            let funciones= document.querySelector('.titleDos');
            funciones.classList.add('funciones')
            funciones.textContent= `Administra RPM `
    
    
            motoPosada.addEventListener('click', moto_posada)
            administrador.addEventListener('click', administrador_)
            usuarios.addEventListener('click', usuario_)
    
    
             //funciones---------------------------------------------------------------------------------
             function moto_posada(){
                funciones.textContent= `Administra tus motoposadas `
                mensaje.textContent='Bienvenido a tus moto-posadas';
                motoPosada.classList.add('selected')
                usuarios.classList.remove('selected')
                administrador.classList.remove('selected')
    
                let fondoHeader= document.getElementById('header');
                fondoHeader.style.backgroundImage="url('assets/img/fondo3.jpg')"
    
                let fondo= document.getElementById('uno');
                fondo.style.backgroundImage="url('assets/img/fondo3.jpg')"
                links.children[2].textContent='¿Admininstra tus moto-posadas?'
                links.children[3].textContent='Como administrar'
                links.children[1].classList.add('ocultar');
                links.children[0].classList.add('ocultar');
    
                
            
    
    
    
    
            }
            function administrador_(){
                funciones.textContent= `Administra RPM `
                mensaje.textContent='Bienvenido usario Administrador';
                administrador.classList.add('selected');
                motoPosada.classList.remove('selected');
                usuarios.classList.remove('selected')
    
                let fondoHeader= document.getElementById('header');
                fondoHeader.style.backgroundImage="url('assets/img/fondo4.jpg')"
    
            let fondo= document.getElementById('uno');
            fondo.style.backgroundImage="url('assets/img/fondo4.jpg')"
    
                links.children[2].textContent='¿Administra RPM?'
                links.children[3].textContent='Como Administrar'
                links.children[1].classList.add('ocultar');
                links.children[0].classList.add('ocultar');
    
               
            
    
    
            }
    
            function usuario_(){
                funciones.textContent= `¿Que quieres hacer? `
                mensaje.textContent='Bienvenido Motoviajero';
                usuarios.classList.add('selected');
                administrador.classList.remove('selected')
                motoPosada.classList.remove('selected')
    
                let fondoHeader= document.getElementById('header');
                fondoHeader.style.backgroundImage="url('assets/img/fondo2.jpg')"
    
                let fondo= document.getElementById('uno');
                fondo.style.backgroundImage="url('assets/img/fondo2.jpg')"
    
    
                
    
                
    
            }
    
            //fin funciones
    
    
    
            texto1.textContent='Administrar Rutas'
            texto2.textContent='Administrar Motoviajeros'
            texto3.textContent='Solicitudes motoposada'
    
            
            imgtexto1.src=('assets/img/img7.jpg')
            imgtexto1.style.width='150px';
            imgtexto1.style.height='100px'
    
            
            imgtexto2.src=('assets/img/img8.jpg');
            imgtexto2.style.width='150px';
            imgtexto2.style.height='100px'
    
    
            
            imgtexto3.src=('assets/img/img9.png');
            imgtexto3.style.width='150px';
            imgtexto3.style.height='100px'


            //----------------
            const wid1= document.querySelector('.fun .wid1');
            wid1.src=('assets/img/iwid1.jpg')
            wid1.style.backgroundImage="url('assets/img/iwid3.jpg')"


            tituloGaleria.textContent='Galeria de Administrador'
    
    
    
    
    
    
    
    
    
    
    
    
           
            cerrarSesion.addEventListener('click', ()=>{
                alert('saliendo');
    
                
                location.href = "index.html";
    
    
            } ) 
    
        }
    
    
        
        
        else{
            alert('Usuario o Contraseña incorrectos')
            console.log(`Los datos ingresados son incorrectos`)
            console.log(`usuario: ${inUsuario}  contraseña${inContraseña}`);
            
        }
    }



}


//fin comprovacion






