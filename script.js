// Cambiar modo oscuro/claro
const btnModoOscuro = document.getElementById('modo-oscuro');
const body = document.body;

// Verificar preferencia del usuario
if (localStorage.getItem('modo-oscuro') === 'true') {
    body.setAttribute('data-bs-theme', 'dark');
    btnModoOscuro.innerHTML = '<i class="bi bi-sun"></i>';
}

btnModoOscuro.addEventListener('click', () => {
    if (body.getAttribute('data-bs-theme') === 'dark') {
        body.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('modo-oscuro', 'false');
        btnModoOscuro.innerHTML = '<i class="bi bi-moon-stars"></i>';
    } else {
        body.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('modo-oscuro', 'true');
        btnModoOscuro.innerHTML = '<i class="bi bi-sun"></i>';
    }
});

// Botón para subir al inicio
const btnSubir = document.getElementById('btn-subir');
btnSubir.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Confirmación de suscripción
const btnSuscripcion = document.getElementById('btn-confirmar-suscripcion');
btnSuscripcion.addEventListener('click', () => {
    alert('¡Gracias por suscribirte a nuestro boletín!');
    const modalBoletin = bootstrap.Modal.getInstance(document.getElementById('modalBoletin'));
    modalBoletin.hide();
});

// Validación de formulario de contacto
const formularioContacto = document.getElementById('formulario-contacto');
formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
    formularioContacto.reset();
});

// Efectos hover
const elementosHover = document.querySelectorAll('.elemento-hover');
elementosHover.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        elemento.style.transform = 'scale(1.02)';
    });
    
    elemento.addEventListener('mouseleave', () => {
        elemento.style.transform = 'scale(1)';
    });
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});