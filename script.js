document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();

            const targetElement = document.querySelector(anchor.getAttribute("href"));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth",
                });

                // Close mobile menu if open
                mobileMenu?.classList.add("hidden");
            }
        });
    });

    // Form submission (demo only)
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("This is a demo form. In a real portfolio, this would send your message.");
        });
    }
});
// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark"));
    });

    // Load dark mode preference from localStorage
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark");
    }
}