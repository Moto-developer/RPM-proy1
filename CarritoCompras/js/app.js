const contenidoTienda = document.querySelector("#contenidoTienda");

const productos = [
    {
        id: 1,
        nombreProducto: "producto Numero 1",
        precio: 70000,
        cantidad: 1,
        img: "Imagenes/ozuna.png",
    },
    {
        id: 2,
        nombreProducto: "producto Numero 2",
        precio: 90000,
        cantidad: 1,
        img: "/Imagenes/parareflexionar.png",
    },
    {
        id: 3,
        nombreProducto: "producto Numero 3",
        precio: 120000,
        cantidad: 1,
        img: "./Imagenes/FLOPA2.png",
    },
];

const cart = [];

productos.forEach((producto) =>{
    const content = document.createElement("div");
    content.innerHTML = `
    <img src="${producto.img}">
    <h3> ${producto.nombreProducto}</h3>
    <p>$ ${producto.precio}</p>
    `;

    contenidoTienda.append(content);

    const compraBoton = document.createElement("button");
    compraBoton.innerText = "Comprar";

    content.append(compraBoton);

    //con el some me ayuda a buscar y evitar que los productos se dupliquen en cuanto a imagen e item
    compraBoton.addEventListener("click", ()=>{
        const contador = cart.some((repeatProduct) => repeatProduct.id === producto.id);

        if(contador){
            cart.map((prod) =>{
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            });
        }else{
             cart.push({
            id: producto.id,
            nombreProducto: producto.nombreProducto ,
            precio: producto.precio,
            cantidad: producto.cantidad,
            img: producto.img,
        });
        }
    });
});































