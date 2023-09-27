//Arrays Mostrar en tabla de datos
const Motoviajero = [

] 

const Viajeros1 = {
    Nombre: prompt("Ingrese el nombre del primer motoviajero"),
    Placa: prompt("Ingrese la placa"),
}



const Viajeros2 = {
    Nombre: prompt("Ingrese el nombre del segundo motoviajero"),
    Placa: prompt("Ingrese la placa"),
}

const Viajeros3 = {
    Nombre: prompt("Ingrese el nombre del tercero motoviajero"),
    Placa: prompt("Ingrese la placa"),
}

//Forma #1 de vincular objeto a las arrays
 Motoviajero.unshift(Viajeros3);
Motoviajero.push(Viajeros2);
Motoviajero.push(Viajeros1);

console.table (Motoviajero);