// // Veamos lo que se conoce como Traversing the DOM

// // Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes elementos se le conoce como Traversing the DOM, ir recorriendolo.. como si fuera un mapa en el cual nos informa todo lo que queremos saber sobre el documento


const navegacion = document.querySelector('.navegacion');
const card = document.querySelector('.card');
// console.log(navegacion);
// /*

// // Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
// console.log(navegacion.childNodes); //TOMA LOS ESPACIOS EN BLANCO PARA MIRAR LOS ELEMENTOS


// // también existe algo llamado Children
// console.log(navegacion.children) // TOMA LOS ELEMENTOS HTML REALES DE LOS CUALES PODEMOS NAVEGAR


// // La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos html reales dentro del documento...



// // El HTML collection continene la información como si fuera un arreglo y podemos acceder a ella
// console.log(navegacion.children[3])



// console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
// console.log(navegacion.children[0].nodeName) // Que etiqueta es...
// */



// // 1 = Elemento
// // 2 - Atributo
// // 3 - Text node
// // 8 - Commentario
// // 9 - Documento
// // 10 doctype



// // en javascript puedes seleccionar un elemento y navegar en sus diferentes elementos... por ejemplo el card...
//  const card = document.querySelector('.card');
// // console.log(card.children); //muestra los elementos que tiene la card seleccionada...
// //console.log(card.nodeType);
// //console.log(card.nodeName);



// // Si quieres acceder a ese div con la clase de info puedes colocar...
// // console.log(card.children[1]);

// // Si quieres accedera  los elementos hijos de ese info... recuerda puedes anidar las propiedades.
// // console.log(card.children[1].children[1]);




// // Acceder al titulo
// console.log(card.children[1].children[1].textContent);

// // Modificar ese titulo con un traversing
// card.children[1].children[1].textContent = 'Cambiando el Texto con traversing...'




// // Intenta cambiar el texto que dice concierto por algo más siguiendo esta sintaxis de ir navegando por el DOM...


// // Igual podemos acceder a las imagenes...
// console.log(card.children);
// console.log(card.children[0]);
// console.log(card.children[0].src);

// // Cambiar la imagen...
// //card.children[0].src = 'img/hacer3.jpg';

// /*
// document.querySelector('.contenido-hero h1').textContent= "ADSO2556678";
// */

// const card1 = document.querySelector('.card4 .im4')

// card1. src = 'img/hacer1.jpg';
// // Children es una buena forma de acceder a los elementos por su posición, pero supongamos que de nuestra navegación queremos acceder al primer o último enlace...


//console.log(navegacion.firstChild);
//console.log(navegacion.firstElementChild);


// Si desesa acceder al primero
// console.log(navegacion.firstChild)
// console.log(navegacion.firstElementChild);

// Cambiar el primer texto...
//navegacion.firstElementChild.textContent = 'Inicio/Home'
// +





//vimos como hacer traversing de un elemento padre hacia el hijo, JavaScript también te permite seleccionar un elemento hijo e ir navegando hacia el padre...


// vamos a seleccionar el primer enlace...
const enlace = document.querySelector('a');
console.log(enlace);


// Hay diferente sformas...

console.log(enlace.parentNode)
console.log(enlace.parentElement)



// En algunos casos ambos van a dar el mismo resultado, en otros recuerda el espacio es importante...


// También puedes ir al padre del padre...
console.log(enlace.parentElement.parentElement)



// En JavaScript también es posible de hacer traversing a elementos que estan en el mismo nivel , digamos el vecino aunque en javascript se les conoce como hermanos...

console.log(enlace);
console.log(enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);



console.log(card.nextElementSibling);


// También hay una forma de ir digamos en la otra dirección...


const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);
