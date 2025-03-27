/* Script for cookie_consent */
const cookieConsent = document.getElementById('cookie-consent');
function acceptCookies() {
    localStorage.setItem('cookie_consent_accepted', 'true');
    cookieConsent.style.display = 'none';
}
if (!localStorage.getItem('cookie_consent_accepted')) {
    cookieConsent.style.display = 'block';
}
const privacyLink = document.createElement('a');
privacyLink.href = 'privacy-policy.html';
privacyLink.textContent = 'política de privacidad';
const closeButton = document.createElement('button');
closeButton.textContent = 'Aceptar';
closeButton.addEventListener('click', acceptCookies);
const content = document.createElement('div');
content.classList.add('container');
            <p class="m-0">Este sitio web utiliza cookies para garantizar una experiencia óptima de navegación. Al continuar utilizando nuestro sitio, aceptas el uso de cookies. Lee nuestra ${privacyLink.outerHTML} para obtener más información.</p>
`;
cookieConsent.appendChild(content);
cookieConsent.appendChild(closeButton);

