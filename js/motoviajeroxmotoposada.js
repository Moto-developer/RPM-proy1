//funcion de para hacer los cambios a motoposada
function motoposada() {
    const cambiomp = document.querySelector('.bienvenida').textContent = 'BIENVENIDO MOTOPOSADA';

    const solicitudes = document.querySelector('#quienes_somos h1').textContent = 'Solicitudes'
    const servicios = document.querySelector('#servicios h1').textContent = 'Comentarios'
        //--------------------lista(barra de navegacion)----------------------------
    const lista = document.querySelector('.lista')
        //---------solicitudes para motoposada--------------------------------
    const solicitudesmp = document.createElement('li')
    const solicitudesmplink = document.createElement('a')
    solicitudesmplink.href = '#quienes_somos';
    solicitudesmplink.textContent = 'solicitudes'
    lista.appendChild(solicitudesmp);
    solicitudesmp.appendChild(solicitudesmplink);
    const elementoExistente = lista.children[1];
    lista.insertBefore(solicitudesmp, elementoExistente);
    //--------comentarios para motoposada-----------
    const lista2 = document.querySelector('.lista')
    const comentariosmp = document.createElement('li')
    const comentariosmplink = document.createElement('a')
    comentariosmplink.href = '#servicios';
    comentariosmplink.textContent = 'Comentarios'
    lista2.appendChild(comentariosmp);
    comentariosmp.appendChild(comentariosmplink);
    const elementoExistente1 = lista2.children[2];
    lista2.insertBefore(comentariosmp, elementoExistente1);
    //--------eliminacion-enlaces antiguos
    var elemento = lista.children[3];
    lista.removeChild(elemento);
    //eliminacion de mis rutas para motoposada
    const soliborr=document.querySelector('.iniciomp')
    const soliborr2 = document.querySelector('.borrar_soli')
    soliborr.removeChild(soliborr2)
    //------------------dropdown-------------------
    const cambio = document.querySelector('.dropdown-menu ');
    const motoviajerocambio = document.createElement('li');
    motoviajerocambio.onclick = function llamado() {
        window.location = 'inicio_usumv.html';
    }
    const motoviajerolink = document.createElement('a');
    motoviajerocambio.textContent = 'Ser motoviajero';
    cambio.appendChild(motoviajerocambio);
    motoviajerocambio.appendChild(motoviajerolink);
    const elementoExistente2 = cambio.children[1];
    cambio.insertBefore(motoviajerocambio, elementoExistente2);
    //   `  ---------remover elemento(ser motoposada)-------`
    var elementomp = cambio.children[0];
    cambio.removeChild(elementomp);
    //--------------------------------------------------
    //---remocion de elementos en solicitudes---
    const solicitudesborr = document.querySelector('#quienes_somos')
    var elementos2 = solicitudesborr.children[1];
    solicitudesborr.removeChild(elementos2);
    //---remocion de elementos en comentarios parte1---
    const comentariosborr = document.querySelector('#servicios')
    var elementos1 = comentariosborr.children[1]
        //----creacion de comentarios motoposada----------------
        // Comentario del primer motero
    const comentario_motero10 = document.createElement('div');
    comentario_motero10.classList.add('comentarios1');
    const comentario_motero15 = document.createElement('h4');
    comentario_motero15.classList.add('titulocomen1')
    comentario_motero15.textContent = 'Camilo Salazar:';
    const comentario_motero20 = document.createElement('p');
    comentario_motero20.textContent = 'rpm es un aplicativo móvil con soporte web que sirve para viajar';
    comentario_motero10.appendChild(comentario_motero15);
    comentario_motero10.appendChild(comentario_motero20);
    comentariosborr.insertBefore(comentario_motero10, elementos1);
    //---remocion de elementos en comentarios parte2---
    comentariosborr.removeChild(elementos1)
        //--------------------------------------------
        //segundo comentario
    const comentario2 = document.createElement('div')
    comentario2.classList.add('comentarios2')
    const titulocomen2 = document.createElement('h4')
    titulocomen2.classList.add('titulocomen2')
    titulocomen2.textContent = 'Wilman:'
    const parracomen2 = document.createElement('p')
    parracomen2.textContent = 'rpm no es un aplicativo móvil con soporte web que sirve para viajar'
    comentario2.appendChild(titulocomen2)
    comentario2.appendChild(parracomen2)
    comentariosborr.insertBefore(comentario2, comentario_motero10)
        //solicitudes motoposada
    const divimgsoli = document.createElement('div')
    divimgsoli.classList.add('imagensoli');
    const imagensoli = document.createElement('img');
    imagensoli.src = 'img/crash.png';
    divimgsoli.appendChild(imagensoli)
    solicitudesborr.appendChild(divimgsoli)
   












}