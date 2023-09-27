// Factura
alert("Bienvenido a la tienda \"CAMPESENA\"");
alert("Se realizara una factura de venta");
const nombrecliente = prompt("Ingrese el nombre del cliente");
const Producto1= prompt("Ingrese el nombre del \[1\] Producto");
let ValorProducto1 = parseInt (prompt("Ingrese el valor unitario del producto"));
//
const Producto2= prompt("Ingrese el nombre del \[2\] Producto");
let ValorProducto2 = parseInt (prompt("Ingrese el valor unitario del producto"));
//
const Producto3= prompt("Ingrese el nombre del \[3\] Producto");
let ValorProducto3 = parseInt (prompt("Ingrese el valor unitario del producto"));
//
const Producto4= prompt("Ingrese el nombre del \[4\] Producto");
let ValorProducto4 = parseInt (prompt("Ingrese el valor unitario del producto"));


console.log ("--------------------------------");
console.log ("     FACTURA \[CAMPESENA\]       ");
console.log ("--------------------------------");
console.log ("     FACTURA N.\[00001\]  ");
console.log ("  \[Producto\]   \[Precio\]    ");
console.log (Producto1 , ValorProducto1);
console.log (Producto2 , ValorProducto2);
console.log (Producto3 , ValorProducto3);
console.log (Producto4 , ValorProducto4);
console.log ("--------------------------------");
let Subtotal = (ValorProducto1 + ValorProducto2 + ValorProducto3 + ValorProducto4) ;
console.log (`SUBTOTAL: $${Subtotal}`);
let iva = Subtotal * 0.19;
console.log ("EL IVA ES:" + iva);
let descuento = Subtotal * 0.10;
console.log ("EL DESCUENTO ES:" + descuento);
let Total = (Subtotal - descuento) + iva; 
console.log ("EL cliente" + " " + nombrecliente + " " + "su precio total de la factura es:" + " " + Total);
