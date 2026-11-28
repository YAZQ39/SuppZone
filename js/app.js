import { Header } from "./components_header.js";
document.querySelector("#site-header").innerHTML = Header();


const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("#site-header nav a").forEach((link) => {
  const isActive = link.getAttribute("href") === currentPage;

  link.classList.remove("text-[#c6f135]", "text-[#a0a5ac]");
  link.classList.add(isActive ? "text-[#c6f135]" : "text-[#a0a5ac]");
});


import { Footer } from "./components_footer.js";
document.querySelector("#site-footer").innerHTML = Footer();

//theme toggle

const navLinks = document.querySelectorAll("#site-header nav a");

for (let i = 0; i < navLinks.length; i++) {
  const link = navLinks[i];
  const linkPage = link.getAttribute("href");

  link.classList.remove("text-[#c6f135]", "text-[#a0a5ac]");

  if (linkPage === currentPage) {
    link.classList.add("text-[#c6f135]");
    link.setAttribute("aria-current", "page");
  } else {
    link.classList.add("text-[#a0a5ac]");
  }
}

const themeButton = document.getElementById("theme-toggle");
const page = document.documentElement;
const themeKey = "suppzone_theme";

function applyTheme(theme) {
  page.dataset.theme = theme;

  if (theme === "light") {
    themeButton.textContent = "☾";
    themeButton.setAttribute("aria-label", "Switch to dark theme");
  } else {
    themeButton.textContent = "☼";
    themeButton.setAttribute("aria-label", "Switch to light theme");
  }
}

const savedTheme = localStorage.getItem(themeKey);

if (savedTheme === "light") {
  applyTheme("light");
} else {
  applyTheme("dark");
}

themeButton.addEventListener("click", function () {
  let nextTheme;

  if (page.dataset.theme === "light") {
    nextTheme = "dark";
  } else {
    nextTheme = "light";
  }

  applyTheme(nextTheme);
  localStorage.setItem(themeKey, nextTheme);
});