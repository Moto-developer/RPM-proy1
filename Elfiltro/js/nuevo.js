import {rutas, nombreruta, minK, maxK, elestado, flopacalificacion, lavia, datosBusqueda} from "./nuevoImport.js";

const botonparaeltal = document.getElementById('borrar');
const elcoso = document.getElementById('contenedor');

//los cosos par aque hagan el tal
nombreruta.addEventListener('change',(e)=>{
    datosBusqueda.nombre=e.target.value;
    elfiltro();
})

minK.addEventListener('change',(e)=>{
    datosBusqueda.minKilometros=e.target.value;
    elfiltro();
})

maxK.addEventListener('change', (e)=>{
    datosBusqueda.maxKilometros=e.target.value;
    elfiltro();
})

elestado.addEventListener('change', (e)=>{
    datosBusqueda.estado=e.target.value;
    elfiltro();
})

flopacalificacion.addEventListener('change', (e)=>{
    datosBusqueda.calificacion=e.target.value;
    elfiltro();
})

lavia.addEventListener('change', (e)=>{
    datosBusqueda.tipoVia=e.target.value;
    elfiltro();
})


for (let i = 0; i < rutas.length; i++) {
    const opcion = document.createElement('option');
    opcion.innerHTML = rutas[i].nombre;
    nombreruta.appendChild(opcion);
}

for (let i = 0; i < rutas.length; i++) {
    const opcion = document.createElement('option');
    opcion.innerHTML = rutas[i].minKilometros;
    minK.appendChild(opcion);
}

for (let i = 0; i < rutas.length; i++) {
    const opcion = document.createElement('option');
    opcion.innerHTML = rutas[i].maxKilometros;
    maxK.appendChild(opcion);
}



//con el poder de Cristo Rey esto va a filtrar
function elfiltro() {
    
    const resultado = rutas.filter((ruta) => {
        return (
            (datosBusqueda.nombre === '' || ruta.nombre.includes(datosBusqueda.nombre)) &&
            (datosBusqueda.minKilometros === '' || ruta.minKilometros >= parseFloat(datosBusqueda.minKilometros)) &&
            (datosBusqueda.maxKilometros === '' || ruta.maxKilometros <= parseFloat(datosBusqueda.maxKilometros)) &&
            (datosBusqueda.estado === '' || ruta.estado === datosBusqueda.estado) &&
            (datosBusqueda.calificacion === '' || ruta.calificacion.toString() === datosBusqueda.calificacion) &&
            (datosBusqueda.tipoVia === '' || ruta.tipoVia === datosBusqueda.tipoVia)
        );
    });

    //llamar al coso para que ya no este solo el coso y ahora pueda estar lleno
    elcoso.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('listapararutas')

    resultado.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('listadoderutas')
        li.innerHTML = `
            <strong>Nombre Ruta:</strong> ${element.nombre}<br>
            <strong>Kilometro Min:</strong> ${element.minKilometros}<br>
            <strong>Kilometro Max:</strong> ${element.maxKilometros}<br>
            <strong>Estado:</strong> ${element.estado}<br>
            <strong>Calificación:</strong> ${element.calificacion}<br>
            <strong>Tipo de Vía:</strong> ${element.tipoVia}
        `;
        ul.appendChild(li);
    });
    elcoso.appendChild(ul);
}

botonparaeltal.addEventListener('click', () => {
    datosBusqueda.nombre = '';
    datosBusqueda.minKilometros = '';
    datosBusqueda.maxKilometros = '';
    datosBusqueda.estado = '';
    datosBusqueda.calificacion = '';
    datosBusqueda.tipoVia = '';

    //para ver el coso de la ruta
    nombreruta.value = '';
    minK.value = '';
    maxK.value = '';
    elestado.value = '';
    flopacalificacion.value = '';
    lavia.value= '';

    //el boton del coso
    elcoso.innerHTML = " ";
})


        