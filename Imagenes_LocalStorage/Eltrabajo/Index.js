document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("imageInput");
    const uploadButton = document.getElementById("uploadButton");
    const imageList = document.getElementById("imageList");

    let images = [];

    // Cargar imágenes desde el almacenamiento 
    const storedImages = localStorage.getItem("images");
    if (storedImages) {
        images = JSON.parse(storedImages);
        renderImages();
    }

    uploadButton.addEventListener("click", function () {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                const newImage = { url: imageUrl, likes: 0 };
                images.push(newImage);
                localStorage.setItem("images", JSON.stringify(images));
                renderImages();
            };
            reader.readAsDataURL(file);
        }
    });

    function renderImages() {
        imageList.innerHTML = ""; // Limpiar la lista antes de renderizar

        for (const image of images) {
            const card = document.createElement("div");
            card.classList.add("image-card");

            const imgElement = document.createElement("img");
            imgElement.src = image.url;

            const actions = document.createElement("div");
            actions.classList.add("actions");

            const likeButton = document.createElement("button");
            likeButton.innerText = `❤️ ${image.likes}`;
            likeButton.addEventListener("click", function () {
                image.likes++;
                localStorage.setItem("images", JSON.stringify(images));
                likeButton.innerText = `❤️ ${image.likes}`;
            });

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "❌";
            deleteButton.addEventListener("click", function () {
                images = images.filter(img => img.url !== image.url);
                localStorage.setItem("images", JSON.stringify(images));
                renderImages();
            });

            actions.appendChild(likeButton);
            actions.appendChild(deleteButton);

            card.appendChild(imgElement);
            card.appendChild(actions);

            imageList.appendChild(card);
        }
    }
});

