document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');

    // Elementos del Modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close-modal');

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

    // Delegación de eventos para las imágenes
    if (galleryGrid) {
        galleryGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('gallery-image')) {
                openModal(e.target.src, e.target.alt);
            }
        });
    }
});
