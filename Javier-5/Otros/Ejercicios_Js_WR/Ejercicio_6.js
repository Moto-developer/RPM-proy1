//Uso de funciones
let a= parseInt(prompt("¿Cuantos usuarios desea registrar?"))
for (let i = 0; i < a; i++) {
  registro ()
}

function registro(){
const linkin = []
  const registrarse={
    nombre:prompt('¿Cual es tu nombre?'),
     apellido:prompt('¿Cual es tu apellido?'),
    edad:prompt('¿Cual es tu edad?'),
    correo:prompt('Cual es tu correo electrónico')}
  linkin.unshift(registrarse)
  console.log(linkin)
}