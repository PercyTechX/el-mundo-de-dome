// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos referencias a los elementos del DOM
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    let isMenuOpen = false;

    // Función para verificar el tamaño de la pantalla
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menu.style.display = 'none';
            menuBtn.style.display = 'block';
            menuBtn.setAttribute('aria-expanded', 'false');
        } else {
            menu.style.display = 'flex';
            menuBtn.style.display = 'none';
            isMenuOpen = false;
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // Función para alternar el menú
    function toggleMenu() {
        if (!isMenuOpen) {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
            menu.style.position = 'absolute';
            menu.style.top = '100%';
            menu.style.left = '0';
            menu.style.backgroundColor = '#2acfcf';
            menu.style.width = '100%';
            menu.style.padding = '1rem';
            menu.style.zIndex = '1000';
            menu.classList.add('active');
            isMenuOpen = true;
            menuBtn.setAttribute('aria-expanded', 'true');
        } else {
            menu.style.display = 'none';
            menu.classList.remove('active');
            isMenuOpen = false;
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // Evento para el botón del menú
    menuBtn.addEventListener('click', toggleMenu);
    menuBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Evento para cerrar el menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !menu.contains(e.target) && e.target !== menuBtn) {
            toggleMenu();
        }
    });

    // Evento para cerrar el menú con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
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