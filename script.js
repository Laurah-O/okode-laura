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
                mobileMenu?.classList.add("hidden");
            }
        });
    });

    // Form submission & validation
    const form = document.querySelector(".space-y-4");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let isValid = true;
            const inputs = form.querySelectorAll("input, textarea");

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add("border-red-500");
                } else {
                    input.classList.remove("border-red-500");
                }
            });

            if (isValid) {
                const formData = new FormData(form);
                fetch("https://formspree.io/f/YOUR_FORM_ID", {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok.");
                    }
                    return response.json();
                })
                .then(() => {
                    alert("Message Sent Successfully!");
                    form.reset();
                })
                .catch(error => {
                    alert("Error sending message. Please check your internet connection or try again later.");
                    console.error("Form submission error:", error);
                });
            } else {
                alert("Please fill out all required fields.");
            }
        });
    }

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
});
