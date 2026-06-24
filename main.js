window.addEventListener("load", () => {
    const start = document.getElementById("startscreen");

    if (start) {
        setTimeout(() => {
            start.classList.add("hide");
        }, 2500);
    }
});

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        once: true
    });
}

const html = document.documentElement;
const btn = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme");

if (saved) {
    html.setAttribute("data-theme", saved);
} else {
    html.setAttribute("data-theme", "dark");
}

btn?.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});