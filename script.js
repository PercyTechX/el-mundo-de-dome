document.addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.querySelector('.boton-menu');
    const menu = document.querySelector('.menu');

    botonMenu.addEventListener('click', () => {
        menu.classList.toggle('activo');
        botonMenu.classList.toggle('activo');
    });

    // Cerrar el menú al hacer clic en un enlace
    const enlacesMenu = document.querySelectorAll('.enlace-menu');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menu.classList.remove('activo');
            botonMenu.classList.remove('activo');
        });
    });

    // Cerrar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('activo');
            botonMenu.classList.remove('activo');
        }
    });
}); 