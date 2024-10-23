document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreTrigger = document.getElementById('load-more-trigger');

    let imageIndex = 2; // Comienza desde la segunda imagen
    const maxImages = 3; // Define el número máximo de imágenes a cargar

    const loadMoreImages = () => {
        // Cargar más imágenes mientras no se haya alcanzado el número máximo
        for (let i = 0; i < 3 && imageIndex <= maxImages; i++) {
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
            galleryGrid.appendChild(picture);

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
