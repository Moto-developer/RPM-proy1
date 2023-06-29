//Modal
const abrir_sesion = document.querySelector('#Ingresar')
const cerrar_sesion= document.querySelector('.form_cerrar')
const modal_sesion = document.querySelector('#mimodal')

const abrir_registro = document.querySelector('#Registro')
const cerrar_registro= document.querySelector('.form_cerrar2')
const modal_registro = document.querySelector('#mimodal2')

const cambio_modal1 = document.querySelector('.form_link')
const cambio_modal2 = document.querySelector('.form_link2')
//Fin Modal

const img_principal = document.querySelector('.fondo_1')
const titulo_mv = document.querySelector(".titulo_card_1")
const texto_bienvenida = document.querySelector('#texto_fondo1')
const boton_info1 = document.querySelector(".B_1")
const boton_info2 = document.querySelector(".B_2")
const boton_info3 = document.querySelector(".B_3")

const texto_card1 = document.querySelector('.texto_card1')
const img_card1 = document.querySelector('.imagen_card1')

const titulo_card2 = document.querySelector('.titulo_card_2')
const descargas = document.querySelector('.numero_descarga')

const titulo_card3 = document.querySelector('.titulo_card_3')
const ptr1 = document.querySelector('.Patrocinio1')
const ptr2 = document.querySelector('.Patrocinio2')
const ptr3 = document.querySelector('.Patrocinio3')
const ptr4 = document.querySelector('.Patrocinio4')
const ptr5 = document.querySelector('.Patrocinio5')
const ptr6 = document.querySelector('.Patrocinio6')

//# [Pruebas de consola] #
console.log (img_card1.children[0])


// #############

//Modal de sesion
abrir_sesion.addEventListener("click", () => {
    modal_sesion.showModal();
})

cerrar_sesion.addEventListener("click", () => {
    modal_sesion.close();
})

//Modal de registro
abrir_registro.addEventListener("click", () => {
    modal_registro.showModal();
})

cerrar_registro.addEventListener("click", () => {
    modal_registro.close();
})


// Cambio de sesion a registro
cambio_modal1.addEventListener("click", () => {
    modal_sesion.close();
    modal_registro.showModal();
})

// Cambio de registro a sesion
cambio_modal2.addEventListener('click', () => {
    modal_registro.close();
    modal_sesion.showModal();
})


// INFIERNO
function opcionrol() {
    const lista_rol = document.value    
    console.log(lista_rol)
    
}
function registro () {

}

function ingresar () {
    const ingreso_usuario = document.getElementById("usuario").value;
    const ingreso_contraseña = document.getElementById("contraseña").value;
    if (ingreso_usuario === "adsomv" && ingreso_contraseña === "2556678") {
    motoviajero ()
    } else if (ingreso_usuario === "adsomp" && ingreso_contraseña === "2556678") {
        motoposada ()
    } else {
        alert ('Usuario y/o contrasena incorrecto')
    }
}


function motoviajero () {
    modal_sesion.close();
    abrir_sesion.remove();
    abrir_registro.value= "Cerrar Sesion"
    
    abrir_registro.addEventListener("click", () => {
        modal_registro.close();
        location.reload();
    })

    img_principal.src= './Imagenes/Doom_MV/img1.jpg'
    texto_bienvenida.textContent = 'Bienvenido Motoviajer@'
    texto_bienvenida.style.fontSize = '50px';
    texto_bienvenida.style.fontWeight = 'bold';


    boton_info1.textContent= "Informacion [M.V.]"
    boton_info2.textContent= "Usuarios [M.V.]"
    boton_info3.textContent= "Motoposadas"

    titulo_mv.textContent = "¿Que es ser Motoviajero?"
    texto_card1.textContent = "Un motoviajero es una persona que realiza viajes o travesías largas en motocicleta. Los motoviajeros suelen tener una pasión por los viajes y la aventura, y eligen la motocicleta como su medio de transporte preferido para explorar diferentes lugares, tanto dentro de su país como en el extranjero. Estos viajes suelen implicar recorrer largas distancias, atravesar diversos terrenos y enfrentar desafíos en el camino." + "Ser un motoviajero implica tener habilidades de conducción en motocicleta, conocimiento sobre mecánica básica de la moto, capacidad de planificación de rutas y logística, así como una mentalidad abierta y adaptable para enfrentar diferentes situaciones durante el viaje. Los motoviajeros suelen disfrutar de la libertad y la sensación de aventura que ofrece viajar en motocicleta, así como la posibilidad de explorar paisajes, culturas y tradiciones de manera más cercana e inmersiva."
    img_card1.children[0].src = "./Imagenes/Doom_MV/img2.jpg"
    
    titulo_card2.textContent = 'Motoviajeros registrados'
    descargas.children[0].textContent = ' 1 . 0 0 0 . 0 0 0 '

    titulo_card3.textContent = 'Mejores motoposadas'

    ptr1.style.display = 'flex';
    ptr1.style.justifyContent = 'center';
    ptr1.style.alignitems = 'stretch';
    ptr1.children[0].style.marginBottom = '12px';
    ptr1.children[0].src = './Imagenes/Doom_Mv/Logos/logo1.png'
    ptr1.children[0].style.width = '70px';
    // ptr1.children[0].style.paddingTop = '-20px'; 

    ptr2.style.display = 'flex';
    ptr2.style.justifyContent = 'center';
    ptr2.style.alignitems = 'stretch';
    ptr2.children[0].src = './Imagenes/Doom_Mv/Logos/logo2.png'
    ptr2.children[0].style.width = '60px';
    // ptr2.children[0].style.paddingBottom = '40px';

    ptr3.style.display = 'flex';
    ptr3.style.justifyContent = 'center';
    ptr3.style.alignitems = 'stretch';
    ptr3.children[0].style.marginBottom = '10px';
    ptr3.children[0].src = './Imagenes/Doom_Mv/Logos/logo3.png'
    ptr3.children[0].style.width = '55px';

    ptr4.style.display = 'flex';
    ptr4.style.justifyContent = 'center';
    ptr4.style.alignitems = 'center';
    ptr4.children[0].src = './Imagenes/Doom_Mv/Logos/logo4.png'
    ptr4.children[0].style.width = '70px';
    ptr4.children[0].style.height = '60px';

    ptr5.style.display = 'flex';
    ptr5.style.justifyContent = 'center';
    ptr5.style.alignItems = 'center';
    ptr5.children[0].style.paddingTop = '52px';
    ptr5.children[0].src = './Imagenes/Doom_Mv/Logos/logo5.png'
    ptr5.children[0].style.width = '60px';

    ptr6.style.display = 'flex';
    ptr6.style.justifyContent = 'center';
    ptr6.style.alignitems = 'stretch';
    ptr6.children[0].style.marginBottom = '12px';
    ptr6.children[0].src = './Imagenes/Doom_Mv/Logos/logo6.png'
    ptr6.children[0].style.width = '60px';
}

function motoposada () {
    modal_sesion.close();
    abrir_sesion.remove();
    abrir_registro.value= "Cerrar Sesion"
    
    abrir_registro.addEventListener("click", () => {
        modal_registro.close();
        location.reload();
    })

    img_principal.src= './Imagenes/Doom_MP/img1.jpg'
    texto_bienvenida.textContent = 'Bienvenid@ Motoposada'
    texto_bienvenida.style.fontSize = '50px';
    texto_bienvenida.style.fontWeight = 'bold';
    texto_bienvenida.style.backgroundColor = 'black';
    texto_bienvenida.style.color = 'white';


    boton_info1.textContent= "Informacion [M.P.]"
    boton_info2.textContent= "Motoposadas"
    boton_info3.textContent= "Mejores motoviajeros"

    titulo_mv.textContent = "¿Que es ser Motoposada?"
    texto_card1.textContent = " Una motoposada es un lugar que combina los servicios de una posada o alojamiento con las necesidades y comodidades específicas para los motociclistas. Esta diseñado especialmente para ofrecer hospitalidad y servicios adaptados a los viajeros en motocicleta. Una motoposada proporciona instalaciones que son atractivas y convenientes para los motociclistas, como estacionamiento seguro para las motos, áreas de descanso y reunión, talleres básicos de mantenimiento, información sobre rutas y destinos moteros, y en algunos casos, incluso organiza eventos o excursiones relacionadas con el motociclismo. La idea principal detrás de una motoposada es brindar un ambiente acogedor y amigable para los motociclistas, donde puedan descansar, socializar con otros entusiastas de las motos y disfrutar de su pasión por el motociclismo."
    img_card1.children[0].src = "./Imagenes/Doom_MP/img2.jpg"

    titulo_card2.textContent = 'Motoposadas registradas'
    descargas.children[0].textContent = ' 2 . 5 0 0 . 0 0 0 '

    titulo_card3.textContent = 'Mejores motoviajer@s'

    ptr1.style.display = 'flex';
    ptr1.style.justifyContent = 'center';
    ptr1.style.alignitems = 'stretch';
    ptr1.children[0].style.marginBottom = '12px';
    ptr1.children[0].src = './Imagenes/Doom_MP/Logos/logo1.png'
    ptr1.children[0].style.width = '70px';
    // ptr1.children[0].style.paddingTop = '-20px'; 

    ptr2.style.display = 'flex';
    ptr2.style.justifyContent = 'center';
    ptr2.style.alignitems = 'stretch';
    ptr2.children[0].src = './Imagenes/Doom_MP/Logos/logo2.png'
    ptr2.children[0].style.width = '60px';
    // ptr2.children[0].style.paddingBottom = '40px';

    ptr3.style.display = 'flex';
    ptr3.style.justifyContent = 'center';
    ptr3.style.alignitems = 'stretch';
    ptr3.children[0].style.marginBottom = '10px';
    ptr3.children[0].src = './Imagenes/Doom_MP/Logos/logo3.png'
    ptr3.children[0].style.width = '55px';

    ptr4.style.display = 'flex';
    ptr4.style.justifyContent = 'center';
    ptr4.style.alignitems = 'center';
    ptr4.children[0].src = './Imagenes/Doom_MP/Logos/logo4.png'
    ptr4.children[0].style.width = '70px';
    ptr4.children[0].style.height = '60px';

    ptr5.style.display = 'flex';
    ptr5.style.justifyContent = 'center';
    ptr5.style.alignItems = 'center';
    ptr5.children[0].style.paddingTop = '52px';
    ptr5.children[0].src = './Imagenes/Doom_MP/Logos/logo5.png'
    ptr5.children[0].style.width = '60px';

    ptr6.style.display = 'flex';
    ptr6.style.justifyContent = 'center';
    ptr6.style.alignitems = 'stretch';
    ptr6.children[0].style.marginBottom = '12px';
    ptr6.children[0].src = './Imagenes/Doom_MP/Logos/logo6.png'
    ptr6.children[0].style.width = '60px';
}

