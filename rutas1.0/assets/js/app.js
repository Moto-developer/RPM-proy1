import { rutas, select1, select2, select3, select4, select5, select6, divMostrar, datosBusqueda, botonr } from '../modulos/modulos.js';

for (let i = 0; i < rutas.length; i++) {
    const opcion = document.createElement('option');
    opcion.innerHTML = rutas[i].nombre;
    select1.appendChild(opcion);

}
for (let i = 0; i < rutas.length; i++) {
    const opcion = document.createElement('option');
    opcion.innerHTML = rutas[i].maxKilometros;
    select3.appendChild(opcion);

}

for (let i = 0; i < rutas.length; i++) {
    const opcion = document.createElement('option');
    opcion.innerHTML = rutas[i].minKilometros;
    select2.appendChild(opcion);

}
//------------------------------------------------------
//filtros:
select1.addEventListener('change', (z) => {
    datosBusqueda.nombre = z.target.value;
    filtros();

})
select2.addEventListener('change', (z) => {
    datosBusqueda.minKilometros = z.target.value;
    filtros();
})
select3.addEventListener('change', (z) => {
    datosBusqueda.maxKilometros = z.target.value;
    filtros();
})
select4.addEventListener('change', (z) => {

    datosBusqueda.estado = z.target.value;
    filtros();
})
select5.addEventListener('change', (z) => {

    datosBusqueda.calificacion = z.target.value;
    filtros();
})
select6.addEventListener('change', (z) => {

    datosBusqueda.tipoVia = z.target.value;
    filtros();
    console.log(datosBusqueda)
})

function filtros() {
    const rutasFiltradas = rutas.filter(ruta => {
        return (
            (datosBusqueda.nombre === '' || ruta.nombre.includes(datosBusqueda.nombre)) &&
            (datosBusqueda.minKilometros === '' || ruta.minKilometros >= parseFloat(datosBusqueda.minKilometros)) &&
            (datosBusqueda.maxKilometros === '' || ruta.maxKilometros <= parseFloat(datosBusqueda.maxKilometros)) &&
            (datosBusqueda.estado === '' || ruta.estado === datosBusqueda.estado) &&
            (datosBusqueda.calificacion === '' || ruta.calificacion.toString() === datosBusqueda.calificacion) &&
            (datosBusqueda.tipoVia === '' || ruta.tipoVia === datosBusqueda.tipoVia)
        );
    });

    divMostrar.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('ulrtas')

    rutasFiltradas.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('listadoRutas')
        li.innerHTML = `
            <strong>Nombre:</strong> ${element.nombre}<br>
            <strong>MinKM:</strong> ${element.minKilometros}<br>
            <strong>MaxKM:</strong> ${element.maxKilometros}<br>
            <strong>Estado:</strong> ${element.estado}<br>
            <strong>Calificación:</strong> ${element.calificacion}<br>
            <strong>Tipo de Vía:</strong> ${element.tipoVia}
        `;
        ul.appendChild(li);
    });

    divMostrar.appendChild(ul);
}
//----------------------------------

botonr.addEventListener('click', () => {
    // Restablecer los valores de búsqueda
    datosBusqueda.nombre = '';
    datosBusqueda.minKilometros = '';
    datosBusqueda.maxKilometros = '';
    datosBusqueda.estado = '';
    datosBusqueda.calificacion = '';
    datosBusqueda.tipoVia = '';

    // Limpiar los valores seleccionados en los selectores
    select1.value = '';
    select2.value = '';
    select3.value = '';
    select4.value = '';
    select5.value = '';
    select6.value = '';

    divMostrar.innerHTML = " ";
})