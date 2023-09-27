import {bd_rpm,seleccion_nombre_rutas,seleccion_minkm,seleccion_maxkm,contenedor_busquedad, busquedad, seleccion_tipovia, seleccion_estado, seleccion_calificacion,boton_busquedad} from "./export.js"

for (let i = 0; i<bd_rpm.length; i++) {
    //Creo las opciones
    const Rutas = document.createElement("option")
    const minKm = document.createElement("option")
    const maxKm = document.createElement("option")
    
    //Busco con base a la posicion del array de objetos lo que necesito de cada objeto y lo incorporo a la constante
    Rutas.innerHTML= bd_rpm[i].nombre
    minKm.innerHTML = bd_rpm[i].minKilometros
    maxKm.innerHTML = bd_rpm[i].maxKilometros
    
    //Subo los cambios a su respectivo select
    seleccion_nombre_rutas.appendChild(Rutas)
    seleccion_minkm.appendChild(minKm)
    seleccion_maxkm.appendChild(maxKm)
}

// seleccion_nombre_rutas.addEventListener("change", (cambio) => {
//     bd_rpm.forEach(element => {
//         if (cambio.target.value === element.nombre) {
//             busquedad.nombre = cambio.target.value
//             console.log(busquedad)
//         }
//     });
// })

bd_rpm.forEach(datos_bd => {
    const lista_elementos = document.createElement("div")
    console.log(lista_elementos)
    lista_elementos.innerHTML = `
    <h4> ${datos_bd.nombre},   ${datos_bd.minKilometros}, ${datos_bd.maxKilometros}, ${datos_bd.estado} ,${datos_bd.tipoVia} </h4>
  `
  lista_elementos.style.textAlign= "center"
  lista_elementos.style.marginBottom= "10px"
  lista_elementos.style.backgroundColor = "grey"
  contenedor_busquedad.appendChild(lista_elementos)
})
console.log(contenedor_busquedad)


seleccion_nombre_rutas.addEventListener("change", (cambio_ruta) => {
    busquedad.nombre = cambio_ruta.target.value
    console.log(busquedad)
})

seleccion_minkm.addEventListener("change", (cambio_minkm) => {
    busquedad.minKm = cambio_minkm.target.value
    console.log(busquedad)
})

seleccion_maxkm.addEventListener("change", (cambio_maxkm) => {
    busquedad.maxKm = cambio_maxkm.target.value
    console.log(busquedad)
})

seleccion_estado.addEventListener("change", (estado_ruta) => {
    busquedad.estado = estado_ruta.target.value
    console.log(busquedad)
})

seleccion_calificacion.addEventListener("change", (calificacion) => {
    busquedad.calificacion = calificacion.target.value
    console.log(busquedad)
})

seleccion_tipovia.addEventListener("change",(tipovia) => {
    busquedad.tipo_via = tipovia.target.value
    console.log(busquedad)
})

boton_busquedad.addEventListener("click", () => {
    if(seleccion_nombre_rutas.nombre===busquedad.nombre){
        const mostar= document.createElement('p')
        mostar.innerHTML=` <p> ${seleccion_nombre_rutas}</p>`
        contenedor_busquedad.appendChild(mostar)
    }
})




