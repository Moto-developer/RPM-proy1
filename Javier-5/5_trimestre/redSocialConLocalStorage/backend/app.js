document.addEventListener("DOMContentLoaded", () => {
    const imagenBoton = document.getElementById("imagenInput");
    const botonSubirFoto = document.getElementById("boton_subir");
    const divContenedor = document.getElementById("Contenedor_imagen");

    //? Carga las imágenes almacenadas al localStorage
    loadImages();

    //? Manejar la subida de imágenes
    botonSubirFoto.addEventListener("click", () => {
        imagenBoton.click();
    });

    imagenBoton.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageUrl = event.target.result;
                saveImage(imageUrl);
                loadImages();
            };
            reader.readAsDataURL(file);
        }
    });

    //? Función para guardar una imagen en el localStorage
    function saveImage(imageUrl) {
        const images = JSON.parse(localStorage.getItem("images")) || [];
        images.push({ url: imageUrl, likes: 0 });
        localStorage.setItem("images", JSON.stringify(images));
    }

    //TODO: Función para cargar y mostrar las imágenes almacenadas
    function loadImages() {
        const images = JSON.parse(localStorage.getItem("images")) || [];
        divContenedor.innerHTML = "";
        images.forEach((image, index) => {
            const imageItem = document.createElement("div");
            imageItem.classList.add("image-item");
            const img = document.createElement("img");
            img.src = image.url;
            const likeButton = document.createElement("button");
            likeButton.classList.add("like-button");
            likeButton.innerText = `Likes: ${image.likes}`;
            likeButton.addEventListener("click", () => {
                increaseLikes(index);
            });
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Eliminar";
            deleteButton.addEventListener("click", () => {
                deleteImage(index);
            });
            imageItem.appendChild(img);
            imageItem.appendChild(likeButton);
            imageItem.appendChild(deleteButton);
            divContenedor.appendChild(imageItem);
        });
    }

    //! Función para incrementar los likes de una imagen
    function increaseLikes(index) {
        const images = JSON.parse(localStorage.getItem("images")) || [];
        images[index].likes++;
        localStorage.setItem("images", JSON.stringify(images));
        loadImages();
    }

    //* Función para eliminar una imagen
    function deleteImage(index) {
        const images = JSON.parse(localStorage.getItem("images")) || [];
        images.splice(index, 1);
        localStorage.setItem("images", JSON.stringify(images));
        loadImages();
    }
});


