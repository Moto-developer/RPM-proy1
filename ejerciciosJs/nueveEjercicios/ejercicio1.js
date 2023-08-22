
//factura

alert("Bienvenido a tiendas ADSO")

let nombre=prompt("¿Cual es tu nombre? ");


alert("A continucion digita los 4 productos ")



let pro1=prompt("Digita el nombre del producto");
let valor1= parseInt( prompt("Digita el precio del proucto"));



let pro2=prompt("Digita el nombre del producto");
let valor2= parseInt( prompt("Digita el precio del proucto"));


let pro3=prompt("Digita el nombre del producto");
let valor3= parseInt( prompt("Digita el precio del proucto"));



let pro4=prompt("Digita el nombre del producto");
let valor4= parseInt( prompt("Digita el precio del proucto"));







let valor= (valor1 + valor2 + valor3 + valor4);


console.log("Facura de venta 001");
console.log(pro1 , valor1);
console.log(pro2 , valor2);
console.log(pro3 , valor3);
console.log(pro4, valor4);

console.log("-------------------------------------------")

let total;
total = (valor1+valor2+valor3+valor);
console.log("El subtotal de la factura es: ", valor);

let iva;
iva= (valor*0.19);
console.log("El iva de la factura es: ", iva)

let descuento= (valor*0.1);
console.log("El descuento de la dacutra es: ", descuento);

let valortotal= (valor-descuento)+iva

console.log("El total a pagar señor  ", nombre , " De la factura es: ",valortotal )



