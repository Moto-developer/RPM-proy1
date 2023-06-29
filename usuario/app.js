const boton = document.getElementById('boton')
console.log(boton)
const modal = document.querySelector('.menu')
const cerrar=document.querySelector('.close')
const salir=document.querySelector('.cerrarsesion')
const tema = document.getElementById('tema-oscuro')
console.log(tema)
const pagina=document.getElementById('pagina')
console.log(pagina)
const menuactivo = document.querySelector('.menu-activo')
console.log(menuactivo)
const titulo=document.getElementById('tituloruta')
console.log(titulo)
const linea1=document.querySelector('.linea')
console.log(linea1)
const linea2=document.querySelector('.linea1')
console.log(linea2)
const cambio=document.getElementById('cambio')
console.log(cambio)
const cardsmotoposada = document.querySelectorAll('.cardmotoposada')
console.log(cardsmotoposada)
const cardmotoviajero=document.querySelectorAll('.carta')
const motoviajeros=document.querySelectorAll('.ruta1')
console.log(motoviajeros)
const rutasxd=document.querySelectorAll('.ruta')
const tipousuario=document.querySelector('.tipousuario')
const opc1=document.getElementById('opc1menu')
const opc2=document.getElementById('opc2menu')
const tipotema=document.getElementById('tipotema')

// VARIABLE DE BUCLE
let cambiorol=true;

cambio.addEventListener('click',()=>{
    if(cambiorol){
        opc1.textContent="Perfil Motoposada"
        opc2.textContent="Solicitudes de Hospedaje"
        tipousuario.textContent="MotoPosada"
        titulo.textContent='Ultimos Usuarios Hospedados '
        cambio.textContent='Cambiar a vista MotoViajero'
        cardsmotoposada.forEach(element => element.style.display="block")
        cardmotoviajero.forEach(element => element.style.display="none")
        motoviajeros.forEach(element=>element.style.display="block")
        rutasxd.forEach(element => element.style.display="none")
        cambiorol=false
    }
    else{
        opc1.textContent="Mi Perfil"
        opc2.textContent="Rutas Guardadas"
        tipousuario.textContent="MotoViajero"
        titulo.textContent='Rutas Recomendadas'
        cambio.textContent='Cambiar a vista MotoPosada'
        cardsmotoposada.forEach(element => element.style.display = "none");
        cardmotoviajero.forEach(element => element.style.display = "block");
        motoviajeros.forEach(element => element.style.display = "none");
        rutasxd.forEach(element => element.style.display = "block");
        cambiorol = true;
    }
})


boton.addEventListener('click', ()=>{
    modal.style.display="block"
    menuactivo.style.display="block"

})

cerrar.addEventListener('click',()=>{
    modal.style.display="none"
    menuactivo.style.display="none"

})

menuactivo.addEventListener('click',()=>{
    modal.style.display="none"
    menuactivo.style.display="none"
})

tema.addEventListener('click', ()=>{
if (pagina.classList.contains('bodydark')){
    pagina.classList.remove('bodydark')
    titulo.style.color="black"
    linea1.style.color="black"
    linea2.style.color="black"
    tipotema.textContent="Claro"
  
}
else{
    pagina.classList.add('bodydark')
    titulo.style.color="white"
    linea1.style.color="white"
    linea2.style.color="white"
    tipotema.textContent="Oscuro"
}
})