setTimeout(() => {
    const start = document.getElementById("startscreen");
    if (start) start.style.display = "none";
}, 3000);

const html = document.documentElement;
const btn = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme");
if (saved) html.setAttribute("data-theme", saved);

btn?.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});