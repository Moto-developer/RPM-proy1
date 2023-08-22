// JavaScript
const formulario = document.querySelector('#formulario');
const listatweets = document.querySelector('#lista-tweets');

let tweets = [];

eventListeners();

function eventListeners() {
  formulario.addEventListener('submit', agregarTweets);
}

document.addEventListener('DOMContentLoaded', () => {
  tweets = JSON.parse(localStorage.getItem('tweets')) || [];
  
  crearHTML();
});

function agregarTweets(e) {
  e.preventDefault();
  const tweet = document.getElementById('tweet');
  const imagen = tweet.files[0];
  console.log(imagen)

  if (!imagen) {
    mostrarError('No se permiten cero imágenes');
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet: URL.createObjectURL(imagen),
  };

  tweets = [...tweets, tweetObj];
  crearHTML();
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove();
  }, 500);
}

function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    // se va a crear el HTML para los tweets
    tweets.forEach((tweet) => {
      const botonBorrar = document.createElement('button');
      botonBorrar.classList = 'borrar-tweet';
      botonBorrar.innerHTML = 'X';


      const corazon = document.createElement('button');
      corazon.classList.add('corazon')
      corazon.innerHTML = '❤';

      corazon.addEventListener('click',()=>{
        if(corazon.style.backgroundColor=='red'){
          corazon.style.backgroundColor = 'white'

        }
        else{
          corazon.style.backgroundColor='red'
        }
        

        
        
        
      })
      
      let n= 0 ;
      const numero= document.createElement('p');
      corazon.addEventListener('click',()=>{
        
        n++;
        numero.textContent=`${n}`;
        corazon.appendChild(numero);
        

      })
      
      botonBorrar.onclick = () => {
        borrarTweet(tweet.id);
    };

      const img = document.createElement('img');
      img.src = tweet.tweet;
      img.classList.add('tamaño');

      const li = document.createElement('li');
      li.appendChild(img);
      li.appendChild(corazon)
      li.appendChild(botonBorrar);
      listatweets.appendChild(li);
    });
  }

  agregarStorage();
}





function agregarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
  
}

function limpiarHTML() {
  while (listatweets.firstChild) {
    listatweets.removeChild(listatweets.firstChild);
  }
}

function borrarTweet(id) {
  tweets = tweets.filter((tweets) => tweets.id !== id);
  crearHTML();
}
