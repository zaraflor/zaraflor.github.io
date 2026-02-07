document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');

    // --- Lógica de Carga Dinámica de Imágenes ---
    let imageIndex = 1;
    let keepLoading = true;

    const formatImageNumber = (num) => {
        return num.toString().padStart(2, '0');
    };

    const loadNextImage = () => {
        if (!keepLoading) return;

        const formattedIndex = formatImageNumber(imageIndex);
        const img = new Image();
        const currentSrc = `images/gallery/${formattedIndex}.jpg`;
        const currentAvif = `images/gallery/${formattedIndex}.avif`;

        img.onload = () => {
            // Si la imagen existe, crear el elemento y añadirlo al DOM
            const figure = document.createElement('figure');
            figure.classList.add('gallery-item');

            const picture = document.createElement('picture');

            const source = document.createElement('source');
            source.srcset = currentAvif;
            source.type = 'image/avif';

            const imgElement = document.createElement('img');
            imgElement.src = currentSrc;
            imgElement.alt = `Arreglo floral ${formattedIndex}`;
            imgElement.classList.add('gallery-image');
            imgElement.loading = 'lazy';

            picture.appendChild(source);
            picture.appendChild(imgElement);
            figure.appendChild(picture);
            galleryGrid.appendChild(figure);

            // Intentar cargar la siguiente
            imageIndex++;
            loadNextImage();
        };

        img.onerror = () => {
            // Si la imagen no existe (error 404), detenemos la carga
            keepLoading = false;
        };

        img.src = currentSrc;
    };

    // Iniciar la carga
    if (galleryGrid) {
        loadNextImage();
    }

    // --- Lógica del Lightbox (Modal) ---
    const openModal = (src) => {
        modal.style.display = "block";
        modalImg.src = src;
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModalFunc = () => {
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
    };

    if (closeModal) closeModal.addEventListener('click', closeModalFunc);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunc();
    });

    // Delegación de eventos para las imágenes (funciona para elementos dinámicos)
    if (galleryGrid) {
        galleryGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-image')) {
                openModal(e.target.src);
            }
        });
    }
});
