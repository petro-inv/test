/* Script for navigation */
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMain = document.querySelector('#navbarMain');
navbarToggler.addEventListener('click', () => {
  navbarMain.classList.toggle('show');
});
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMain.classList.remove('show');
  });
});

/* Script for cookie_consent */
const cookieConsent = document.getElementById('cookie-consent');
const acceptButton = document.createElement('button');
acceptButton.textContent = 'Aceptar';
acceptButton.classList.add('btn', 'btn-primary', 'mx-2');
const privacyLink = document.createElement('a');
privacyLink.textContent = 'Leer política de privacidad';
privacyLink.href = '#';
privacyLink.classList.add('text-white', 'text-decoration-underline');
cookieConsent.querySelector('.container').appendChild(acceptButton);
cookieConsent.querySelector('.container').appendChild(privacyLink);
acceptButton.addEventListener('click', () => {
  cookieConsent.style.opacity = 0;
  setTimeout(() => {
    cookieConsent.style.display = 'none';
  }, 500);
});
document.addEventListener('DOMContentLoaded', () => {
  cookieConsent.style.opacity = 1;
});
setTimeout(() => {
  cookieConsent.style.transition = 'opacity 0.5s';
}, 1000);

