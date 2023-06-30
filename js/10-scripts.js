// Finalmente otro tema importante cuando trabajas con el DOM, es la creación de HTML desde JavaScript..

// Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, de ahi la gente comienza a darle me gusta, así que veamos como hacerlo generar HTML desde JavaScript...


// Existe algo llamado el DOM Scripting que miraremos despues...

// Vamos a crear un nuevo enlace... lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...

const enlace = document.createElement('A'); //en el argumento le paso la etiqueta elemento que quiero que se cree dentro del HTML

// Segundo paso es crear el texto del enlace no? lo haremos con textContent
 
enlace.textContent = 'SENA';
enlace.href = 'http://www.sena.edu.co';
enlace.target = '_blank';

console.log(enlace);





// Finalmente se agrega el enlace donde deseas mostrarlo...

// Si quieres agregar una clase

//enlace.classList.add('enlace');

//enlace.setAttribute('class', 'concierto');//otra forma de agregar atriburos
//enlace.classList.add("paseo"); //agregar la clase al nuevo enlace

//escogemos en este caso la navegacion que es donde queremos que se agregue
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //este metodo de navegacion lo pondrá al final de la navegacion en el documento
navegacion.insertBefore(enlace, navegacion.children[3]); //este metodo de navegacion agrega donde tu quieras tiene dos argumentos el enlace y el otro la ubicacion o nodo de referencia ANTES DE

//puedes crear cualquier elemento incluso agregar funciones

enlace.onclick = alertas;

function alertas(){
    alert('Hola ESTAS A PUNTO DE ENTRAR A LA PAGINA DEL SENA');
}


console.log(enlace);


// Vamos a crear un segundo ejemplo, crearemos uno de nuestros cards...

//crear los 3 parrafos.

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'APRENDIZ ADSO';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'MANUEL SOLARTE';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = 'JORNADA TARDE';
parrafo3.classList.add('precio');

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);


// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer4.jpg';

//igual podemos agregar a la imagen atributos
imagen.alt = 'Texto Alternativo';
//imagen.classList.add('hacer2');

// Crear el Card..
const card = document.createElement('div');
card.classList.add('card');

// Vamos a asignar la imagen al card...
card.appendChild(imagen);

// y el info
card.appendChild(info);



// Insertarlo en el HTML... igual debes de escoger muy bien donde ponerlo
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // al inicio info
//contenedor.insertBefore(card, contenedor.children[0]); // al inicio info

console.log(parrafo1);
console.log(parrafo2);
