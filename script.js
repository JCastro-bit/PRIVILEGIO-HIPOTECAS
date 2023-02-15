// Animación para el menú de navegación
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add('navbar-scrolled');
    navLinks.forEach(link => {
      link.classList.add('nav-link-scrolled');
    });
  } else {
    navbar.classList.remove('navbar-scrolled');
    navLinks.forEach(link => {
      link.classList.remove('nav-link-scrolled');
    });
  }
});

// Animación para la sección de inicio
const inicio = document.querySelector('#inicio');
const inicioText = document.querySelector('#inicio-text');

window.addEventListener('scroll', () => {
  if (window.scrollY > inicio.offsetHeight / 2) {
    inicioText.classList.add('animate__animated', 'animate__fadeInUp');
  } else {
    inicioText.classList.remove('animate__animated', 'animate__fadeInUp');
  }
});

// Animación para la sección de préstamos
const prestamosCards = document.querySelectorAll('#prestamos .card');

prestamosCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('animate__animated', 'animate__pulse');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('animate__animated', 'animate__pulse');
  });
});

// Animación para el formulario de contacto
const contactoForm = document.querySelector('#contacto form');

contactoForm.addEventListener('submit', event => {
  event.preventDefault();

  contactoForm.classList.add('animate__animated', 'animate__shakeX');

  setTimeout(() => {
    contactoForm.reset();
    contactoForm.classList.remove('animate__animated', 'animate__shakeX');
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo lo antes posible.');
  }, 2000);
});