// Proyectos --> Uso de objetos
alert("RESGISTRO DEL MOTOVIAJERO");
let nombreviajero = prompt ("Ingrese el nombre del motoviajero");
let apellidoviajero = prompt ("Ingrese el apellido");
let Correoviajero = prompt ("Ingrese el correo");
let telefonoviajero = prompt ("Ingrese el telefono");
let generoviajero = prompt ("Ingrese el genero");

const Motoviajero = {
    Nombre: nombreviajero,
    Apellido: apellidoviajero,
    Correo: Correoviajero,
    Telefono: telefonoviajero,
    Genero: generoviajero
} 

console.log(Motoviajero);

alert("DATOS DE LA RUTA");
let P_Partida = prompt ("Ingrese un punto de partida");
let P_Parada1 = prompt ("Ingrese el [1] punto de parada");
let P_Parada2 = prompt ("Ingrese el [2] punto de parada");
let P_Destino = prompt ("Ingrese un punto de llegada");
let PR_FechaViaje = prompt ("Ingrese la fecha de viaje");

const Ruta = {
    Partida: P_Partida,
    Parada1: P_Parada1,
    Parada2: P_Parada2,
    Destino: P_Destino,
    Fecha: PR_FechaViaje
}

console.log(Ruta);

alert("GASTOS DE LA RUTA")
let D_Hospedaje = parseInt (prompt ("Ingrese el gasto en Hospedaje"));
let D_Gasolina = parseInt (prompt ("Ingrese el gasto en Hospedaje"));
let D_Alimentacion = parseInt (prompt ("Ingrese el gasto en alimentacion"));
let D_Recreacion = parseInt (prompt ("Ingrese el gasto en Recreacion"));
let D_Otros = parseInt (prompt ("Ingrese el gasto de otros"));

const Gastos = {
    Hospedaje: D_Hospedaje,
    Gasolina: D_Gasolina,
    Alimentacion: D_Alimentacion,
    Recreacion: D_Recreacion,
    Otros_Gastos: D_Otros
}

console.log(Gastos)

let Total_Gastos = (D_Hospedaje + D_Gasolina + D_Alimentacion + D_Recreacion + D_Otros)
let Promedio_Gastos = ((D_Hospedaje + D_Gasolina + D_Alimentacion + D_Recreacion + D_Otros) / 5)
let Agradecimiento = "Gracias Por usar nuestros servicios"
console.log ("Gastos");
console.log ("------------------------");
console.log ("     REPORTE [R.P.M]    ");
console.log ("------------------------");
console.log (`Usuario: ${nombreviajero} ${apellidoviajero}`);
console.log (`Punto de Partida: ${P_Partida}`);
console.log (`Punto de Llegada: ${P_Destino}`);
console.log (`La Primera Parada fue en: ${P_Parada1}`);
console.log (`La segunda parada fue en: ${P_Parada2}`);
console.log (`Kilometos recorridos: 320km`)
console.log (`Total de gastos: \$${Total_Gastos}`)
console.log (`Su promedio de gastos es de: \$${Promedio_Gastos}`)
console.log ("------------------------");
console.log (`Este viaje fue realizado en la fecha: ${PR_FechaViaje}`);
console.log (Agradecimiento.toLocaleUpperCase());
console.log ("------------------------");