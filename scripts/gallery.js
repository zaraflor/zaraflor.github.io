document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreTrigger = document.getElementById('load-more-trigger');

    // Elementos del Modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close-modal');

    let imageIndex = 2; // Comienza desde la segunda imagen
    const maxImages = 3; // Define el número máximo de imágenes a cargar

    // Lógica del Lightbox (Modal)
    const openModal = (src, alt) => {
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = alt;
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

    // Delegación de eventos para las imágenes (existentes y dinámicas)
    galleryGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('gallery-image')) {
            openModal(e.target.src, e.target.alt);
        }
    });

    const loadMoreImages = () => {
        // Cargar más imágenes mientras no se haya alcanzado el número máximo
        for (let i = 0; i < 3 && imageIndex <= maxImages; i++) {
            const figure = document.createElement('figure');
            figure.classList.add('gallery-item');

            const picture = document.createElement('picture');

            const source = document.createElement('source');
            source.srcset = `images/gallery/${imageIndex}.avif`;
            source.type = 'image/avif';

            const img = document.createElement('img');
            img.src = `images/gallery/${imageIndex}.jpg`;
            img.alt = `Arreglo floral ${imageIndex}`;
            img.classList.add('gallery-image');
            img.loading = 'lazy';

            picture.appendChild(source);
            picture.appendChild(img);
            figure.appendChild(picture);
            galleryGrid.appendChild(figure);

            imageIndex++; // Incrementa el índice para la siguiente imagen
        }

        // Detener el observer si se han cargado todas las imágenes
        if (imageIndex > maxImages) {
            observer.disconnect(); // Deja de observar el "trigger" cuando se alcanza el límite
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMoreImages(); // Carga más imágenes cuando el "trigger" es visible
            }
        });
    });

    observer.observe(loadMoreTrigger);
});
