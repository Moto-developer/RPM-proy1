const modalContainer = document.querySelector("#modal-container");
const modal = document.querySelector("#modal-overlay");

const cartboton = document.querySelector("#cart-boton");

const displaycart = () => {

        modalContainer.innerHTML = "";

        modalContainer.style.display = "block";
        modal.style.display = "block";

    const modalHeader = document.createElement("div");

    const modalclose = document.createElement("div");
    modalclose.innerText = "❌";
    modalclose.className = "modal-close";
    modalHeader.append(modalclose);

    modalclose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modal.style.display = "none";
    });


    const modalTitulo = document.createElement("div");
    modalTitulo.innerText = "Carrito";
    modalTitulo.className = "modal-titulo";
    modalHeader.append(modalTitulo);

    modalContainer.append(modalHeader);

    //
    cart.forEach((producto) => {
        const modalbody = document.createElement("div");
        modalbody.className = "modal-body";
        modalbody.innerHTML = `
            <div class="producto">
                <img class="producto-img" src="${producto.img}" />
                <div class="producto-info">
                    <h4>${producto.nombreProducto}</h4>
                </div>

                <div class="quantity">
                    <span class="quantity-btn-decrese" id="quantity-btn-decrese"> - </span>
                    <span class="quantity-input">${producto.cantidad}</span>
                    <span class="quantity-btn-increse" id="quantity-btn-increse">+</span>
                </div>

                <div class="price">${producto.precio * producto.cantidad} $ </div>
                <div class="delete-product" id="delete-product" >❌</div>
            </div>
        `;
        modalContainer.append(modalbody);

        //este es para restar la cantidad de item o productos
        const decrese = modalbody.querySelector("#quantity-btn-decrese");
        decrese.addEventListener("click", () => {
            //con el condicional evito que sean numeros negativo, evitando que si es menor que uno lo deja quieto
            if(producto.cantidad !== 1){
                producto.cantidad--;
                //esto es importate ya que con este refresco el carrito para que se actualice
                displaycart(); 
            }
        });

        //este es para incrementar la cantida de item o productos
        const increse = modalbody.querySelector("#quantity-btn-increse");
        increse.addEventListener("click",() =>{
            producto.cantidad++;
            displaycart();
        });

        //este es eliminar los productos, por ahora no funciona del todo
        const deleteProduct = modalbody.querySelector("#delete-product");
        deleteProduct.addEventListener("click", () => {
            deleteCart(producto.id);
        });

    });

    // para hacer el total no entendi bien el reduce pero lo que hace es que el acc acumulador le agrego el.precio por la cantida del primero y asi
    const total = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "footer",
    modalFooter.innerHTML = `
    <div class="total-price">Total: ${total}</div>
    `;
    modalContainer.append(modalFooter);
};

cartboton.addEventListener("click", displaycart);

//con esto elimino el id del carrito devolviendo el index con el forindex
const deleteCart = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId, 1);
    displaycart();
};

