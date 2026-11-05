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
