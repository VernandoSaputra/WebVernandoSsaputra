// JavaScript functionality can be added here
// Example: Add a submit event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        alert(`Terima kasih, ${name}! Pesan Anda telah diterima: \n\n${message}`);
    });
});
