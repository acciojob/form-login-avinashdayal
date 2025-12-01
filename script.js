// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form1');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // event is defined here
    const first = form.elements['fname'].value.trim();
    const last  = form.elements['lname'].value.trim();

    // alert the full name exactly as Cypress expects
    alert(`${first}${last ? ' ' + last : ''}`);
  });
});
