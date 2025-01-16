document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-toggle-icon");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
            themeIcon.classList.add("rotate");
        }
    }

    themeToggle.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("data-theme");
        const newTheme = theme === "dark" ? "" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        themeIcon.classList.toggle("rotate");
    });
});