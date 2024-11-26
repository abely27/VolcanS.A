// Seleccionar elementos
const searchIcon = document.getElementById("search-icon");
const searchModal = document.getElementById("search-modal");
const searchInput = document.getElementById("search-input");

// Abrir el modal al hacer clic en el ícono
searchIcon.addEventListener("click", () => {
    searchModal.style.display = "flex";
    searchInput.focus(); // Foco automático en el campo de búsqueda
});

// Cerrar el modal al hacer clic fuera del contenido
searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) {
        searchModal.style.display = "none";
    }
});

// Opcional: Cerrar con la tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        searchModal.style.display = "none";
    }
});
