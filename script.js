// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos referencias a los elementos del DOM
    const menuBtn = document.getElementById('menuBtn'); // Botón del menú hamburguesa
    const menu = document.getElementById('menu');       // Contenedor del menú
    let isMenuOpen = false;                            // Estado del menú (abierto/cerrado)

    // Función que verifica el tamaño de la pantalla y ajusta el menú en consecuencia
    function checkScreenSize() {
        // Si la pantalla es pequeña (menos de 768px)
        if (window.innerWidth <= 768) {
            menu.style.display = 'none';      // Ocultamos el menú
            menuBtn.style.display = 'block';  // Mostramos el botón hamburguesa
        } else {
            // Si la pantalla es grande
            menu.style.display = 'flex';      // Mostramos el menú en formato horizontal
            menuBtn.style.display = 'none';   // Ocultamos el botón hamburguesa
            isMenuOpen = false;               // Reseteamos el estado del menú
        }
    }

    // Evento que se dispara cuando se hace clic en el botón del menú
    menuBtn.addEventListener('click', function() {
        if (!isMenuOpen) {
            // Si el menú está cerrado, lo abrimos
            menu.style.display = 'flex';          // Mostramos el menú
            menu.style.flexDirection = 'column';  // Lo mostramos en columna
            menu.style.position = 'absolute';     // Lo posicionamos absolutamente
            menu.style.top = '100%';              // Lo colocamos justo debajo del header
            menu.style.left = '0';                // Alineado a la izquierda
            menu.style.backgroundColor = '#fff';  // Fondo blanco
            menu.style.width = '100%';            // Ancho completo
            menu.style.padding = '1rem';          // Espaciado interno
            isMenuOpen = true;                    // Marcamos el menú como abierto
        } else {
            // Si el menú está abierto, lo cerramos
            menu.style.display = 'none';          // Ocultamos el menú
            isMenuOpen = false;                   // Marcamos el menú como cerrado
        }
    });

    // Verificamos el tamaño de la pantalla al cargar la página
    checkScreenSize();
    
    // Agregamos un listener para cuando se redimensione la ventana
    window.addEventListener('resize', checkScreenSize);
}); 