// Hamburger
function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
}

// Dark Mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("theme-icon").textContent = "🌞";
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");

    body.classList.toggle("dark");

    // Add spin animation
    icon.classList.add("rotate");

    // Change icon mid-spin
    setTimeout(() => {
      const isDark = body.classList.contains("dark");
      icon.textContent = isDark ? "🌞" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, 150);

    // Reset animation class
    setTimeout(() => {
      icon.classList.remove("rotate");
    }, 300);
}