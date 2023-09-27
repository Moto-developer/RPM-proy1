// Promedio de notas
alert ("Bienvenid\@ a la planilla de notas del [Sena]")
let aprendiz1 = prompt("Ingrese el nombre del \[1\] aprendiz")
let notapr1 = parseInt (prompt(`Ingrese la \[1\] nota del aprendiz ${aprendiz1}`));
notapr1 = (notapr1 * 0.20);
let notapr2 = parseInt (prompt(`Ingrese la \[2\] nota del aprendiz ${aprendiz1}`));
notapr2 = (notapr2 * 0.20);
let notapr3 = parseInt (prompt(`Ingrese la \[3\] nota del aprendiz ${aprendiz1}`));
notapr3 = (notapr3 * 0.60);
finalpr1 = (notapr1 + notapr2 + notapr3);

let aprendiz2 = prompt("Ingrese el nombre del \[2\] aprendiz")
let notapr21 = parseInt (prompt(`Ingrese la \[1\] nota del aprendiz ${aprendiz2}`));
notapr21 = (notapr21 * 0.20);
let notapr22 = parseInt (prompt(`Ingrese la \[2\] nota del aprendiz ${aprendiz2}`));
notapr22 = (notapr22 * 0.20);
let notapr23 = parseInt (prompt(`Ingrese la \[3\] nota del aprendiz ${aprendiz2}`));
notapr23 = (notapr23 * 0.60);
finalpr2 = (notapr21 + notapr22 + notapr23);

let aprendiz3 = prompt("Ingrese el nombre del \[3\] aprendiz")
let notapr31 = parseInt (prompt(`Ingrese la \[1\] nota del aprendiz ${aprendiz3}`));
notapr31 = (notapr31 * 0.20);
let notapr32 = parseInt (prompt(`Ingrese la \[2\] nota del aprendiz ${aprendiz3}`));
notapr32 = (notapr32 * 0.20);
let notapr33 = parseInt (prompt(`Ingrese la \[3\] nota del aprendiz ${aprendiz3}`));
notapr33 = (notapr33 * 0.60);
finalpr3 = (notapr31 + notapr32 + notapr33);

console.log("--------------------------------");
console.log("        PARCIAL [SENA]"            );
console.log("--------------------------------")
console.log(`La nota parcial del aprendiz ${aprendiz1} es de: \[${notapr1}\] \[${notapr2}\] \[${notapr3}\]`);
console.log(`La nota final del aprendiz ${aprendiz1} es de: \[${finalpr1}\]`);
console.log("--------------------------------");
console.log(`La nota parcial del aprendiz ${aprendiz2} es de: \[${notapr21}\] \[${notapr22}\] \[${notapr23}\]`);
console.log(`La nota final del aprendiz ${aprendiz2} es de: \[${finalpr2}\]`);
console.log("--------------------------------");
console.log(`La nota parcial del aprendiz ${aprendiz3} es de: \[${notapr31}\] \[${notapr32}\] \[${notapr33}\]`);
console.log(`La nota final del aprendiz ${aprendiz3} es de: \[${finalpr3}\]`);
