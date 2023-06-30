// let recorrido;
// // busqueda por clase 
// const cabeza = document.getElementsByClassName(`contenedor`)
// recorrido=document.head;
// recorrido=document.forms[0].action;
// recorrido=document.links[24];
// recorrido=document.links[4];
// recorrido=document.images;

//----------------------------------------//



//  "traversing" (traversal en inglés) se refiere a recorrer o navegar a través de los elementos de una estructura de datos o de un documento HTML
// console.log(recorrido)

// console.log(cabeza)


// busqueda por id
// const arreglo2= document.getElementById(`formulario`)
// console.log(arreglo2)
// acceder a card

// const card= document.querySelector(`.info .hospedaje`)
// console.log(card)

// para seleccionarlos todos 
// const formulario= document.querySelectorAll(".hola")
// console.log(formulario)

// const card2= document.querySelectorAll(".card")
// console.log(card2)

// const encabezado= document.querySelector(`.contenido-hero h1`).textContent =` este es nuevo aldair`
// console.log(encabezado)
// console.log(encabezado.textContent)

// const section= document.querySelector(`.hacer h2`).textContent=(`que vamos a hacer hoy?`)

 
// let inicio;
// do {
//     alert("Hola usuario");
//     inicio = parseInt(prompt("¿Qué tipo de usuario eres?"));
//     if (parseInt(inicio) > 3) {
//         alert("Usuario no válido");
//     }
// } while (parseInt(inicio) > 3);

// if (parseInt(inicio) === 1) {
//     document.querySelector(".contenido-hero h1").textContent = "Bienvenido, motoviajero";
// } else if (parseInt(inicio) === 2) {
//     document.querySelector(".contenido-hero h1").textContent = "Bienvenido, motoposada";
// }

 

 // quiyre selctor la lista de clase que

//  const card= document.querySelector(".card")
// //  console.log(card.children[1])
// //  console.log(card.children[1].children[1].textContent)
//  card.children[1].children[1].textContent="messi es el mejor"
// card.children[0].src =`img/hacer2.jpg`

// console.log()

// frist elemntchil añade un nuevo enlace 

// let navegacion=document.querySelector(".navegacion")
// console.log(navegacion)
// console.log(navegacion.childNodes);
// // el children es el mas utlizado 
// console.log(navegacion.children[3].nodeType);
// console.log(navegacion.children[3].nodeName);
// nodetype que tipo es el tipo
// nodename nombre de nodo
// alert("Hola usuario");


// let inicio;
// alert("Hola usuario");
//     inicio = parseInt(prompt("¿Qué tipo de usuario eres?"));
// // do {
// //     alert("Hola usuario");
// //     inicio = parseInt(prompt("¿Qué tipo de usuario eres?"));
// //     if (parseInt(inicio) > 3) {
// //         alert("bienvenido rutas para moteros");
// //     }
// // } while (parseInt(inicio) > 3);

// if (parseInt(inicio) === 1) {
//     document.querySelector(".contenido-hero h1").textContent = "Bienvenido, motoviajero";

//     navegacion.firstElementChild.textContent="rutas"
//     navegacion.children[1].textContent="garage"
//     navegacion.children[2].textContent=""
//     navegacion.lastElementChild.textContent="presupuesto"

   
    
// } else if (parseInt(inicio) === 2) {
//     document.querySelector(".contenido-hero h1").textContent = "Bienvenido, motoposada";
//     navegacion.firstElementChild.textContent="ubicacion"
//     navegacion.children[1].textContent=""
//     navegacion.children[2].textContent=""
//     navegacion.lastElementChild.textContent="calidicacion"
    
// } else if(parseInt(inicio) === 3){
//     document.querySelector(".contenido-hero h1"). textContent = "Bienvenido, motero";

    
// }


// const card=document.querySelector(`.card`);

// console.log(card.children[1].children[1].textContent)
// console.log(card.children[0])
// card.children[0].src=``

// card.children[1].children[1].textContent=`cambiando el texto`

// const titulo=document.querySelector(`.contenido-hero h1 `);
// console.log(titulo.textContent)
// titulo.textContent  =`hola mundo`


// desdde le hijo parennode 
//parennode

// const enlace=document.querySelector(`a`)
// console.log(enlace.parentNode)
// console.log(enlace.parentElement.parentElement)

// const primerenlace=document.querySelector(".navegacion")
// console.log(primerenlace)
// primerenlace.remove();
// primerenlace.removeChild(primerenlace.children[2])

// repasar esto 
// const enlace=document.createElement("A");
// enlace.textContent="nuevo enlace";
//  enlace.href="https://chat.openai.com";
//  enlace.target="blank";
//  console.log(enlace)
//  enlace.classList.add("enlace")

//  const a=document.querySelector(".navegacion")
//  a.appendChild(enlace);

// // const primerenlace=document.querySelector(".navegacion")
// // primerenlace.insertBefore(enlace.)

// enlace.onclick=alertas;
// function alertas(){
//     alert("estas a punto de ingresar a chat gtp")

// }


// const parrafo1= document.createElement("p");
// parrafo1.textContent="cyti";
// parrafo1.classList.add("categoria");
// parrafo1.classList.add("concierto");

// const parrafo2= document.createElement("p");
// parrafo2.textContent="entrada";
// parrafo2.classList.add("titulo");


// const parrafo3= document.createElement("p");
// parrafo3.textContent="messi";
// parrafo3.classList.add("precio");


// const info= document.createElement("div")
// info.classList.add("info");
// info.appendChild(parrafo1)
// info.appendChild(parrafo2)
// info.appendChild(parrafo3)


// const imagen= document.createElement("img")
// imagen.src ="img/hacer1.jpg"
// imagen.alt("texto nuevo ")

// const card= document.createElement("div")
// card.appendChild(imagen)
// card.appendChild(info)

// const contenedor= document.querySelector(".hacer .contenedor-cards")
// contenedor.appendChild(card)


const flotante=document.querySelector(".btn-flotante");
const footer= document.querySelector(".footer");
flotante.addEventListener("click", ()=>{
alert("diste click")
}
)