// Category button active state
const chips = document.querySelectorAll(".chip");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");
  });
});

// Favorite toggle
const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const img = btn.querySelector("img");
    img.src = btn.classList.contains("active")
      ? "../../assets/icons/paw-filled.svg"
      : "../../assets/icons/paw-outline.svg";
  });
});
