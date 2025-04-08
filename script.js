// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos referencias a los elementos del DOM
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    // Función para alternar el menú en dispositivos móviles
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        const isExpanded = menu.classList.contains('active');
        menuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Cerrar el menú al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Verificamos el tamaño de la pantalla al cargar y al redimensionar
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Mejoramos la accesibilidad del menú
    const menuItems = menu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        
        // Navegación con teclado
        item.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                const nextItem = menuItems[index + 1] || menuItems[0];
                nextItem.focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevItem = menuItems[index - 1] || menuItems[menuItems.length - 1];
                prevItem.focus();
            }
        });
    });
});

// Función para verificar el tamaño de la pantalla
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        menu.style.display = 'none';
        menuBtn.style.display = 'block';
        menuBtn.setAttribute('aria-expanded', 'false');
    } else {
        menu.style.display = 'flex';
        menuBtn.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
    }
} 