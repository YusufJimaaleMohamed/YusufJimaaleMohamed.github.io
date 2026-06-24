setTimeout(() => {
    document.getElementById("startscreen")?.remove();
}, 3000);

const html = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const saved = localStorage.getItem("theme");
if (saved) html.setAttribute("data-theme", saved);

toggleBtn?.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});