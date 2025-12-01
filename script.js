document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form1');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const first = form.elements['fname'].value.trim();
    const last = form.elements['lname'].value.trim();

    // Input validation
    if (!first && !last) {
      alert("Please enter your first name and last name.");
      return;
    } else if (!first) {
      alert("Please enter your first name.");
      return;
    } else if (!last) {
      alert("Please enter your last name.");
      return;
    }

    // Alert the full name
    alert(`${first}${last ? ' ' + last : ''}`);
  });
});