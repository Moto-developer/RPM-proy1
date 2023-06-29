function ola()
{
let user = document.getElementById('users').value;
let contra = document.getElementById('contra').value;
    if (user.trim() === '' && contra.trim() === ''){
        alert('No puedes tener epsacios en blanco');
    }else if(user !== 'adso2556678' && contra !== 'adso2023') {
        alert("Usuaario y/o contraseña incorrecta");
    }else {
        alert("inicio de sesion exitoso")
        window.location = '/motopajero.html';
    }
}

function motoposada(){
    const tituloo = document.querySelector('.titulo');
    tituloo.textContent="Bienvenido MotoChoza";
    const elpapu=document.querySelector(".sorra")
    console.log(elpapu)
   

    const rutas = document.querySelector('#navegacion');
    rutas.children[1].textContent = "Ubicacion";
    rutas.children[2].textContent = "Solicitudes";
    rutas.children[3].textContent = "Calificacion";
    elpapu.src = "/Imagenes/lafuente.png"
}

const cerrarSesion = document.getElementById('cerrarSesion');
cerrarSesion.addEventListener('click', ()=>{
    alert("Has cerrado Sesion");
    location.href = "/prueba.html";
})
