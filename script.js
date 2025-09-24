// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formMessage.textContent = "✅ Thank you for reaching out! I’ll reply soon.";
        formMessage.style.color = "lightgreen";
        contactForm.reset();
    });
}
