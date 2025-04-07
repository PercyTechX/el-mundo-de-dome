document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    let isMenuOpen = false;

    // Función para verificar el tamaño de la pantalla
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menu.style.display = 'none';
            menuBtn.style.display = 'block';
        } else {
            menu.style.display = 'flex';
            menuBtn.style.display = 'none';
            isMenuOpen = false;
        }
    }

    // Evento para el botón del menú
    menuBtn.addEventListener('click', function() {
        if (!isMenuOpen) {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
            menu.style.position = 'absolute';
            menu.style.top = '100%';
            menu.style.left = '0';
            menu.style.backgroundColor = '#fff';
            menu.style.width = '100%';
            menu.style.padding = '1rem';
            isMenuOpen = true;
        } else {
            menu.style.display = 'none';
            isMenuOpen = false;
        }
    });

    // Verificar el tamaño de la pantalla al cargar y al redimensionar
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}); 