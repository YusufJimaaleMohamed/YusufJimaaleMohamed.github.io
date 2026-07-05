window.addEventListener("load", () => {

    const startScreen = document.getElementById("startscreen");

    if (startScreen) {
        setTimeout(() => {
            startScreen.classList.add("hide");
        }, 2500);
    }

});


if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 900,
        once: true
    });

}


const html = document.documentElement;
const themeButton = document.getElementById("themeToggle");
const themeIcon = themeButton?.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
} else {
    html.setAttribute("data-theme", "dark");
}

function updateThemeIcon() {

    if (!themeIcon) return;

    if (html.getAttribute("data-theme") === "dark") {
        themeIcon.className = "bi bi-moon-stars";
    } else {
        themeIcon.className = "bi bi-sun-fill";
    }

}

updateThemeIcon();

themeButton?.addEventListener("click", () => {

    const current = html.getAttribute("data-theme");

    const next = current === "dark"
        ? "light"
        : "dark";

    html.setAttribute("data-theme", next);

    localStorage.setItem("theme", next);

    updateThemeIcon();

});

const welcomeTexts = [

    "Welkom",
    "Welcome",
    "Bienvenido",
    "Willkommen",
    "Bienvenue",
    "Benvenuto",
    "ようこそ",
    "환영합니다",
    "欢迎",
    "مرحبا"

];

let welcomeIndex = 0;
let charIndex = 0;

const welcomeElement = document.getElementById("welcomeText");

function typeWelcome() {

    if (!welcomeElement) return;

    const current = welcomeTexts[welcomeIndex];

    welcomeElement.textContent = current.substring(0, charIndex);

    charIndex++;

    if (charIndex <= current.length) {

        setTimeout(typeWelcome, 120);

    } else {

        setTimeout(eraseWelcome, 1500);

    }

}

function eraseWelcome() {

    const current = welcomeTexts[welcomeIndex];

    welcomeElement.textContent = current.substring(0, charIndex);

    charIndex--;

    if (charIndex >= 0) {

        setTimeout(eraseWelcome, 60);

    } else {

        welcomeIndex++;

        if (welcomeIndex >= welcomeTexts.length) {

            welcomeIndex = 0;

        }

        setTimeout(typeWelcome, 300);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWelcome, 2700);

});



const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


const form = document.querySelector(".contact-form-card");

if (form) {

    form.addEventListener("submit", () => {

        alert("Bedankt! Je mailprogramma wordt geopend.");

    });

}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});