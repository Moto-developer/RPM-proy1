const usuario=document.querySelector('.usuario')// acedi a el usuario 
console.log(usuario);

const contraseña=document.querySelector('.contraseña')
console.log(contraseña);

const formulario=document.querySelector('.formulario')
console.log(formulario);

let bienvenido= document.querySelector(".bienvenida");
console.log(bienvenido)

let navegacion = document.querySelector(".navegacion");
console.log(navegacion.children)

const ruta = document.querySelector(".rutas")
console.log(ruta)

const inforuta= document.querySelector(".info-ruta")
console.log(inforuta)

const crearuta= document.querySelector(".crea-ruta ")
console.log(crearuta)

const crearuta2= document.querySelector(".crea-ruta2 ")
console.log(crearuta2)



const gastost= document.querySelector(".gastosts")
console.log(gastost)
const conocermision=document.getElementById("conocer-mision")
console.log(conocermision)

const conocervision=document.getElementById("conocer-vision")
console.log(conocervision)

const Presupuesto=document.getElementById("presupuesto")
console.log(Presupuesto)

const section = document.getElementById('about');

// const borrar3= document.getElementById("portfolio")
// borrar3.remove()


ingresar.addEventListener('click',() =>{

    if(usuario.value===""){
        alert("no se permiten espacios en blanco ");
    }
    
   else{
     if(usuario.value ==="motoviajero"  && contraseña.value==="adso2023"){
        console.log(usuario.value)

        bienvenido.textContent=`bienvenido ${usuario.value}`
        
        navegacion.children[0].firstElementChild.textContent=""
        navegacion.children[1].firstElementChild.textContent="Rutas"
        navegacion.children[2].firstElementChild.textContent="Presupuesto"
        navegacion.children[3].firstElementChild.textContent="Gastos"
        // navegacion.children[4].firstElementChild.textContent="motos"
        navegacion.children[4].textContent=""
        
        // enlace, navegacion.children[4]
        const enlace = document.createElement('li');
        const enlace2 = document.createElement('a');
       
        enlace2.textContent = 'cerrar sesion';
        enlace2.href = 'http://127.0.0.1:5501/index.html';
        enlace2.target = '_self';
        enlace.classList.add('nav-item')
        enlace2.classList.add('nav-link');

        enlace.appendChild(enlace2);

        console.log(enlace);
        navegacion.insertBefore(enlace, navegacion.children[6]);
        const team= document.getElementById("team")
        team.remove()

        

        
        // const elementmotoposada= document.createElement('li')
        // const linkmotoposada = document.createElement('a')
        // linkmotoposada.textContent="motoposada"
        // linkmotoposada.href='#'
        // linkmotoposada.classList.add('nav-link')
        // elementmotoposada.classList.add('nav-item')
        // elementmotoposada.appendChild(linkmotoposada)
        // navegacion.insertBefore(elementmotoposada,navegacion.children[5])
        
        // const elementmoto= document.createElement('li')
        // const linkmoto = document.createElement('a')
        // linkmoto.textContent="moto"
        // linkmoto.href='#'
        // linkmoto.classList.add('nav-link')
        // elementmoto.classList.add('nav-item')
        // elementmoto.appendChild(linkmoto)
        // navegacion.insertBefore(elementmoto,navegacion.children[7]);

       
        const imagen = document.getElementById("primeraimagen");

        imagen.src = "/imagenes-logos/mi-segunda-img.jpg";

        const imagenruta1 = document.getElementById("segunda-imagen");

        imagenruta1.src = "/imagenes-logos/via-cali.jpeg";
        
        const imagen3= document.getElementById("imagen3")
        imagen3.src="/imagenes-logos/via-cali.jpeg"

        const imagen4= document.getElementById("imagen4")
        imagen4.src="/imagenes-logos/via-medellin.jpeg"

        const imagen5= document.getElementById("terceraimg")
        imagen5.src="/imagenes-logos/via-medellin.jpeg"

        
        const imagen6= document.getElementById("trazaruta")
        imagen6.src="/imagenes-logos/traza-ruta1.webp"


        const texto=document.getElementById("texto-mision")
        console.log(texto)
        texto.textContent=" los gastos en esta ruta fueron  alimentacion 20000  combustible 25000"
           
        const titulo=document.getElementById("titulomision")
        titulo.children[0].textContent="ruta pasto a cali"
        titulo.children[1].textContent=""

        const titulovision=document.getElementById("titulovision")
        titulovision.children[0].textContent="ruta desde popayan a  medillin"
        titulovision.children[1].textContent=""
        titulovision.children[3].textContent="los gastos en esta ruta fueron  alimentacion 50000  combustible 80000"

        
        const crearuta6=document.getElementById("crearuta6")
        crearuta6.children[0].textContent="crear ruta"

        const btnguardar=document.getElementById("guardar1")
        btnguardar.textContent="guardar"
       

        const crearuta7=document.getElementById("crearuta7")
        crearuta7.children[0].textContent="crear ruta"
        
        const imagenmapa=document.getElementById("img7")
        imagenmapa.src="/imagenes-logos/traza-ruta1.webp"

       
        ruta.textContent="Rutas"
        inforuta.textContent="Crea una ruta o utliza una existente"
        crearuta.textContent="Ruta a cali"
        crearuta2.textContent="Ruta a medellin"

        conocermision.textContent="mas detalles de la ruta "
        conocervision.textContent="mas detalles de la ruta "


       
        Presupuesto.children[0].textContent="presupuesto"
        Presupuesto.children[1].textContent="presupuesta tu viaje y saca un estimado de gasto "

        
        presupuesto2.remove()
        
        const miDiv = document.createElement('div');
       
        miDiv.id="cardContainer"

        document.body.appendChild(miDiv);

       

        Presupuesto.insertBefore(miDiv,Presupuesto.children[6])


    

        const cardContainer = document.getElementById('cardContainer');

      
        const col1 = document.createElement('div');
        col1.className = 'col';

       const card1 = document.createElement('div');
        card1.className = 'card';

        const image1 = document.createElement('img');
        image1.src = '/imagenes-logos/traza-ruta1.webp';
        image1.style.margin = 'auto';
        image1.style.width="40rem"

        const cardBody1 = document.createElement('div');
        cardBody1.className = 'card-body';

        const cardTitle1 = document.createElement('h2');
        cardTitle1.className = 'card-title';
        cardTitle1.textContent = 'ruta 1 costo 250000';

       const cardText1 = document.createElement('p');
        cardText1.className = 'card-text';
        

        cardBody1.appendChild(cardTitle1);
        cardBody1.appendChild(cardText1);
        card1.appendChild(image1);
        card1.appendChild(cardBody1);
        col1.appendChild(card1);

       
        const col2 = document.createElement('div');
        col2.className = 'col';

       const card2 = document.createElement('div');
        card2.className = 'card';

       const image2 = document.createElement('img');
        image2.src = '/imagenes-logos/traza-ruta1.webp';
        image2.style.margin = 'auto';
        image2.style.width="40rem"
       
        const cardBody2 = document.createElement('div');
        cardBody2.className = 'card-body';

        var cardTitle2 = document.createElement('h2');
        cardTitle2.className = 'card-title';
        cardTitle2.textContent = 'ruta 2  costo 12000';

       const cardText2 = document.createElement('p');
        cardText2.className = 'card-text';

        cardBody2.appendChild(cardTitle2);
        cardBody2.appendChild(cardText2);
        card2.appendChild(image2);
        card2.appendChild(cardBody2);
        col2.appendChild(card2);

        
        cardContainer.appendChild(col1);
        cardContainer.appendChild(col2);

        
       
        
        


        

        

    }  
    else if (usuario.value==="motoposada" && contraseña.value==="adso2023"){
        let bienvenido2=document.querySelector(".bienvenida");
       
        bienvenido2.textContent=`bienvenido ${usuario.value}`
        navegacion.children[0].firstElementChild.textContent="perfil"
        navegacion.children[1].firstElementChild.textContent="ubicacion"
        navegacion.children[2].firstElementChild.textContent="Calificacion"
        navegacion.children[3].textContent=""
        navegacion.children[4].textContent=""

        
        const texto=document.getElementById("texto-mision")
        console.log(texto)


        texto.textContent="Ser reconocida como la mejor motoposada de la región, brindando una experiencia única y memorable a nuestros huéspedes, ofreciendo servicios de calidad y un ambiente acogedor que refleje la auténtica hospitalidad de nuestra cultura."


      const textovisionmotoposada=document.getElementById("vision-motoposada")
      textovisionmotoposada.textContent="la visión de Motoposada es ser reconocidos como el referente en hospedaje para motociclistas, destacándonos por nuestra calidad de servicio, atención al detalle y espíritu de comunidad, mientras brindamos seguridad y confianza a nuestros huéspedes."

        const conocermision=document.getElementById("conocer-mision")
        conocermision.textContent=("conoce la mision de la motoposada")

        const textobjetivos=document.getElementById("texto-objetivos")
        textobjetivos.textContent="Motoposada busca ofrecer un servicio excepcional a motociclistas, mejorar constantemente sus instalaciones, promover la seguridad, fomentar una comunidad de motociclistas, ampliar sus servicios, impulsar el turismo en áreas atractivas para motociclistas y obtener reconocimiento en el sector"
        
        const imagenobjetivos= document.getElementById("img7")
        imagenobjetivos.src="/imagenes-logos/img-objetivos.jpeg"

        const imagenobjetivosmp= document.getElementById("trazaruta")
        imagenobjetivosmp.src="/imagenes-logos/img-objetivos.jpeg"
        
        const imagen2 = document.getElementById("segunda-imagen");

        // Cambiar la ruta de la imagen
        imagen2.src = "/imagenes-logos/mision-motoposada.jpg";

        const imagen = document.getElementById("primeraimagen");

        // Cambiar la ruta de la imagen
        imagen.src = "/imagenes-logos/img-motoposadas-img.webp";

        const imagen3= document.getElementById("imagen3")
        imagen3.src="/imagenes-logos/img-motoposadas-img.webp"
        // const enlace3 = document.createElement('li');
        // const enlace4 = document.createElement('a');
       
        // enlace4.textContent = 'tema';
        // enlace4.href = '#';
        // enlace4.target = '_self';
        // enlace3.classList.add('nav-item')
        // enlace4.classList.add('nav-link');
        // enlace4.setAttribute("id", "tema");

        // enlace3.appendChild(enlace4);

        // console.log(enlace3);
        // navegacion.insertBefore(enlace3, navegacion.children[5]);
        // const temas= document.getElementById('tema');
        // console.log(temas)
        // const contenido= document.querySelector('.contenido')
        // console.log(contenido)
        // temas.addEventListener('click' , ()=>{

        
        
        // if(contenido.classList.contains('bodyblack')){
        //     contenido.classList.remove('bodyblack')
        // } else{
        //     contenido.classList.add('bodyblack')
        // }
        // })

        const enlace = document.createElement('li');
        const enlace2 = document.createElement('a');
       
        enlace2.textContent = 'cerrar sesion';
        enlace2.href = 'http://127.0.0.1:5501/index.html';
        enlace2.target = '_self';
        enlace.classList.add('nav-item')
        enlace2.classList.add('nav-link');

        enlace.appendChild(enlace2);

        console.log(enlace);
        navegacion.insertBefore(enlace, navegacion.children[6]);

        section.remove()

        const team= document.getElementById("team")
     team.remove()

     
     const adios= document.getElementById("adios")
     adios.remove()


      const titulos= document.getElementById("titulos")
      titulos.textContent="ubicacion"

      // Crea un elemento <img> para mostrar el mapa
        // const mapImage = document.getElementById('mapa');
        // mapImage.src = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44709.28913064079!2d-76.62633315581128!3d2.450901843259611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1688047577118!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        // mapImage.alt = 'Mapa';

        // // Agrega el elemento <img> al contenedor deseado en el DOM
        // const container12 = document.getElementById('mapContainer');
        // container12.appendChild(mapImage);

        const mapContainer = document.createElement('div');
        mapContainer.id = 'mapContainer';
        mapContainer.style.width = '100%';
        mapContainer.style.height = '400px';
        mapContainer.style.display = 'flex';
        mapContainer.style.justifyContent = 'center';
        mapContainer.style.alignItems = 'center';

        const mapIframe = document.createElement('iframe');
        mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44709.28913064079!2d-76.62633315581128!3d2.450901843259611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1688047577118!5m2!1ses!2sco';
        mapIframe.style.margin = 'auto';
        mapIframe.width = '600';
        mapIframe.height = '450';
        mapIframe.style.border = '0';
        mapIframe.allowfullscreen = true;
        mapIframe.loading = 'lazy';
        mapIframe.referrerpolicy = 'no-referrer-when-downgrade';

        mapContainer.appendChild(mapIframe);

        const container = document.getElementById('mapa');
        container.appendChild(mapContainer);
        container.style.backgroundColor="white"
        

        const borrar2= document.getElementById("borrar2")
     borrar2.remove()

     const visionmotoposada= document.getElementById("conocer-vision")
        visionmotoposada.textContent="conoce la vision de la motoposada "

        const imagen5= document.getElementById("terceraimg")
        imagen5.src="/imagenes-logos/vision-motoposada.jpeg"

        const imagen4= document.getElementById("imagen4")
        imagen4.src="/imagenes-logos/vision-motoposada.jpeg"


     const elemento = navegacion.children[1].firstElementChild;

        elemento.addEventListener('click', function(event) {
        event.preventDefault();
        const ubicacion = document.getElementById('mapa');
        ubicacion.scrollIntoView({ behavior: 'smooth' });
        });


        const Calificacion= document.getElementById("calificacion")
        Calificacion.children[0].textContent="calificacion"
        Calificacion.children[1].textContent=""

        const borrar3= document.getElementById("name")
     borrar3.remove()

     const borrar4= document.getElementById("borrar4")
     borrar4.remove()

    const centar= document.getElementById("centrar")
    centar.style.margin = 'auto';
 
    const elemento2=firstElementChild.textContent="Calificacion";
       elemento2 .addEventListener('click', function() {
            // Redirigir a la sección deseada de la página
            window.location.href = '#centrar';
          });
        
    }
     else if( usuario.value ==="admin"  && contraseña.value ==="adso2023"){
        let bienvenido3=document.querySelector(".bienvenida");

        bienvenido3.textContent=`bienvenido ${usuario.value}`
        formulario.action=""

        navegacion.children[0].firstElementChild.textContent=""
        navegacion.children[1].firstElementChild.textContent=""
        navegacion.children[2].firstElementChild.textContent=""
        navegacion.children[3].firstElementChild.textContent=""
        navegacion.children[4].textContent=""
        navegacion.children[5].textContent=""


        
        const enlace = document.createElement('li');
        const enlace2 = document.createElement('a');
       
        enlace2.textContent = 'cerrar sesion';
        enlace2.href = 'http://127.0.0.1:5501/index.html';
        enlace2.target = '_self';
        enlace.classList.add('nav-item')
        enlace2.classList.add('nav-link');

        enlace.appendChild(enlace2);

        console.log(enlace);
        navegacion.insertBefore(enlace, navegacion.children[5]);

       // Obtén una referencia a la sección que deseas eliminar

       const borrar3= document.getElementById("portfolio")
       borrar3.remove()
      
        const primeraimagen= document.getElementById("primeraimagen")
        primeraimagen.src="/imagenes-logos/admin-4.jpeg"

        const primerparrafo=document.getElementById("primerparrafo")
      primerparrafo.textContent="revisa las solicitudes de esta motoposada"
    } 

    else  {
    alert("has ingresado un dato incorrecto");
    console.log(usuario.value);
}
          
   }
});

const ver = document.querySelector('.contraseña');
console
    const btnmostrar= document.getElementById('btnmostrar');
  
   btnmostrar.addEventListener('click', function() {
      if (ver.type === 'password') {
       ver.type = 'text';
        btnmostrar.textContent = 'Ocultar';
      } else {
        ver.type = 'password';
        btnmostrar.textContent = 'Mostrar';
      }
    });
 
    






