document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const mobileMenu = document.querySelector('.menu-option ul');

    toggleMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic form validation for demo button
    const requestDemoButtons = document.querySelectorAll('.request-demo');
    requestDemoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Request a Demo form functionality is not yet implemented.');
        });
    });
});
