setTimeout(() => {
    const start = document.getElementById("startscreen");
    if (start) start.style.display = "none";
}, 3000);

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 800,
        once: true
    });
}

const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
} else {
    html.setAttribute("data-theme", "dark");
}

toggleBtn?.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});