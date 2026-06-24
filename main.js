setTimeout(() => {
    const start = document.getElementById("startscreen");
    if (start) start.style.display = "none";
}, 3500);

AOS.init({
    duration: 800,
    once: true
});

const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) html.setAttribute("data-theme", savedTheme);

toggleBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});
