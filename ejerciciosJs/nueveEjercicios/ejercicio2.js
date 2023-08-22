//promedio de notas

let nombre1=prompt("Escribe nombre del estudiante 1: ");
let nota1= parseFloat(prompt("Digita la nota 1"));
let nota2= parseFloat(prompt("Digita la nota 2"));
let nota3= parseFloat(prompt("Digita la nota 3"));

let not1= parseFloat( nota1*0.2);
let not2= parseFloat( nota2*0.2);
let not3= parseFloat( nota3*0.6);

let final1= (not1+not2+not3) ;


let nombre2=prompt("Escribe nombre del estudiante 2: ");
let nota4= parseFloat(prompt("Digita la nota 1"));
let nota5= parseFloat(prompt("Digita la nota 1"));
let nota6= parseFloat(prompt("Digita la nota 1"));

let not4= nota4*0.2;
let not5= nota5*0.2;
let not6= nota6*0.6;

let final2= not4+not5+not6;

let nombre3=prompt("Escribe nombre del estudiante 3: ");
let nota7= parseFloat(prompt("Digita la nota 1"));
let nota8= parseFloat(prompt("Digita la nota 1"));
let nota9= parseFloat(prompt("Digita la nota 1"));

let not7= nota7*0.2;
let not8= nota8*0.2;
let not9= nota9*0.6;

let final3= not7+not8+not9;



console.log(`${nombre1} Tus notas son: `);
console.log(`${nota1} que vale el 20% y es igual a: ${not1}`);
console.log(`${nota2} que vale el 20% y es igual a: ${not2}`);
console.log(`${nota3} que vale el 60% y es igual a: ${not3}`);
console.log(`Tú nota final es de: ${final1} ` ); 

console.log("==================================================");
console.log("==================================================");

console.log(`${nombre2} Tus notas son: `);
console.log(`${nota4} que vale el 20% y es igual a: ${not4}`);
console.log(`${nota5} que vale el 20% y es igual a: ${not5}`);
console.log(`${nota6} que vale el 60% y es igual a: ${not6}`);
console.log(`Tú nota final es de: ${final2} `);

console.log("==================================================");

console.log(`${nombre3} Tus notas son: `);
console.log(`${nota7} que vale el 20% y es igual a: ${not7}`);
console.log(`${nota8} que vale el 20% y es igual a: ${not8}`);
console.log(`${nota9} que vale el 60% y es igual a: ${not9}`);
console.log(`Tú nota final es de: ${final3} `);








