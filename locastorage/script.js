// selectors
const main = document.querySelector(".main_page");
const off = document.querySelector(".fa-toggle-off");
const on = document.querySelector(".fa-toggle-on");

// ---------- STATE ----------
function applyTheme(theme) {
  if (theme === "dark") {
    main.classList.add("themeChange");
    off.classList.add("hideClass");
    on.classList.remove("hideClass");
  } else {
    main.classList.remove("themeChange");
    off.classList.remove("hideClass");
    on.classList.add("hideClass");
  }
}

// ---------- SAVE STATE ----------
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

// ---------- LOAD STATE ON PAGE LOAD ----------
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// ---------- EVENTS ----------
off.addEventListener("click", () => {
  setTheme("dark");
});

on.addEventListener("click", () => {
  setTheme("light");
});
