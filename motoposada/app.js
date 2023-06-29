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
  
}
else{
    pagina.classList.add('bodydark')
    titulo.style.color="white"
    linea1.style.color="white"
    linea2.style.color="white"
}
})