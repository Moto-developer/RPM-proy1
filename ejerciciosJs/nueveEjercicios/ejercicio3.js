//uso de objetos del proyecto

const motoviajero={
    nombre:prompt("Escribe el nombre del motoviajero: "),
    apellido: prompt("Escribe tu apellido: "),
    tipo_documento: prompt("Escribe el tipo de docuemnto: "),
    numero_documento: parseInt( prompt("Escribe el numero de documento: ")),
    nacionalidad: prompt("Escribe tu nacionalidad: "),

}
const ruta={
    nombre_ruta:prompt("Escribe el nombre de la ruta"),
    punto_inicio: prompt("Escribe el punto de inicio"),
    paradas: prompt("escribe el numero de paradas"),
    punto_llegada:prompt("Escribe el punto de llegada"),
    kilomentros: prompt("Escribe los kilometros")
}
const presupuesto={
    gasolina: parseFloat(prompt("Escribe el valor de la gasolina: ")),
    hospedaje: parseFloat(prompt("Escribe el valor del hospedaje: ")),
    comida: parseFloat(prompt("Escribe el valor de la comida: ")),
    recreacion: parseFloat(prompt("Escribe el valor de la recreacion: ")),
    matenimiento: parseFloat(prompt("Escribe el valor del mantenimiento: ")),

    
}
console.log(motoviajero);
console.log(ruta);
console.log(presupuesto)
let vpresupeusto=(presupuesto.gasolina + presupuesto.hospedaje  +presupuesto.comida+  presupuesto.recreacion+ presupuesto.matenimiento );

console.log("============================================================")
console.log("INFO USUARIO")
console.log(`El motoviajero con nombre: ${motoviajero.nombre} ${motoviajero.apellido} trazo la ruta ${ruta.nombre_ruta} con un numero de ${ruta.paradas} paradas `);
console.log("============================================================");
console.log("INFO RUTA")
console.log(`Desde ${ruta.punto_inicio} , con destino a ${ruta.punto_llegada}, con un numero ${ruta.paradas} paradas  `);
console.log("============================================================");
console.log("FACRURA DE GASTOS");
console.log(`El usuario gasto $${presupuesto.gasolina} en gasolina`);
console.log(`El usuario gasto $${presupuesto.hospedaje} en hospedaje`);
console.log(`El usuario gasto $${presupuesto.comida} en comida`);
console.log(`El usuario gasto $${presupuesto.recreacion} en recreacion`);
console.log(`El usuario gasto $${presupuesto.matenimiento} en mantenimeinto`);
console.log(`El Valor Total que gasto el motoviajero ${motoviajero.nombre} es de: $${vpresupeusto}`);
