// scripts.js

// Ejecuta el código cuando el contenido del documento ha sido completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el elemento del botón para alternar el menú de programas
    const programsToggle = document.getElementById('programs-toggle');
    // Obtener el elemento del menú desplegable de programas
    const programsDropdown = document.getElementById('programs-dropdown');

    // Verifica si los elementos existen antes de añadir el evento
    if (programsToggle && programsDropdown) {
        // Añadir un evento de clic al botón de alternar
        programsToggle.addEventListener('click', () => {
            // Alternar la clase 'show' en el menú desplegable para mostrarlo u ocultarlo
            programsDropdown.classList.toggle('show');
        });
    }

    // Desplazamiento Suave en la Navegación
    // Obtener todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.nav-bar a');
    
    // Iterar sobre cada enlace
    navLinks.forEach(link => {
        // Añadir un evento de clic a cada enlace
        link.addEventListener('click', (event) => {
            // Prevenir el comportamiento por defecto del enlace (navegación instantánea)
            event.preventDefault();
            // Obtener el ID del destino desde el atributo href del enlace
            const targetId = link.getAttribute('href').substring(1);
            // Obtener el elemento de destino basado en el ID
            const targetElement = document.getElementById(targetId);
            
            // Si el elemento de destino existe, desplazar la vista hacia él suavemente
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botón Más Información
    // Obtener todos los botones de "Añadir al carrito" (o similar) en la página
    const infoButtons = document.querySelectorAll('.add-to-cart-btn');
    
    // Iterar sobre cada botón
    infoButtons.forEach(button => {
        // Añadir un evento de clic a cada botón
        button.addEventListener('click', () => {
            // Mostrar una alerta con más información sobre el programa
            alert('Más información sobre el programa');
            // Aquí podrías redirigir a otra página o mostrar un modal con más detalles
        });
    });

    // Control de Horarios
    // Obtener la fecha y hora actuales
    const now = new Date();
    // Obtener el día actual de la semana (0 es domingo, 1 es lunes, etc.)
    const day = now.getDay();
    
    // Obtener todos los elementos de texto de horario
    const horarioTxt = document.querySelectorAll('.horario-txt .txt');
    
    // Iterar sobre cada elemento de texto de horario
    horarioTxt.forEach(txt => {
        // Obtener el texto del día de la semana desde un elemento <h4> dentro del texto
        const dayText = txt.querySelector('h4')?.innerText;
        
        // Si el día de la semana es domingo y hoy es domingo, ocultar el elemento de texto
        if (dayText === 'Domingo' && day === 0) {
            txt.style.display = 'none';
        }
    });
});
//Este script hará que el menú se muestre o se oculte cada vez que se haga clic en el botón "Programas Académicos".
document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

function toggleUniversityMenu(event) {
    const menu = event.target.nextElementSibling;
    const allMenus = document.querySelectorAll('.university-menu');
    const allButtons = document.querySelectorAll('.dropdown-university > a');
    
    // Cierra otros menús
    allMenus.forEach(m => {
        if (m !== menu) m.style.display = 'none';
    });

    // Remueve la clase active de todos los botones
    allButtons.forEach(btn => btn.classList.remove('active-university'));

    // Alterna el menú actual
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';

    // Agrega la clase active al botón actual si el menú está visible
    if (menu.style.display === 'block') {
        event.target.classList.add('active-university');
    }

    event.preventDefault(); // Evita el comportamiento por defecto del enlace
}

