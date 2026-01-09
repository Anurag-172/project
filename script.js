// Simple fade-in on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});
// WhatsApp Contact Form Integration
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    // Get user input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Your WhatsApp number (International format, no + or spaces)
    let whatsappNumber = "919306219129"; // 🔴 REPLACE with your real number

    // Format message
    let whatsappMessage =
        `Hello Anurag,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Message: ${message}`;

    // WhatsApp URL
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    this.reset();
});
