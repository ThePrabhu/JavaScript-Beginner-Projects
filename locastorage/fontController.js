// Selectors
const text = document.querySelector(".text");
const increase = document.querySelector(".add");
const decrease = document.querySelector(".remove");

// Load saved font size (or default)
let fontSize = localStorage.getItem("fontSize")
  ? parseInt(localStorage.getItem("fontSize"))
  : 32;

// Apply font size
function applyFontSize(size) {
  text.style.fontSize = size + "px";
}

// Initial render
applyFontSize(fontSize);

// Increase
increase.addEventListener("click", () => {
  fontSize += 2;
  localStorage.setItem("fontSize", fontSize);
  applyFontSize(fontSize);
});

// Decrease
decrease.addEventListener("click", () => {
  fontSize -= 2;
  localStorage.setItem("fontSize", fontSize);
  applyFontSize(fontSize);
});