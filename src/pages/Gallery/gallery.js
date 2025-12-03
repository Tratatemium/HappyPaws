// Category button active state
const chips = document.querySelectorAll(".chip");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");
  });
});

// Laura: toggle paw like icon on click for both urgent paw badges and fav buttons
const favButtons = document.querySelectorAll(".paw-badge, .fav-btn");

favButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");

    const isLiked = btn.classList.toggle("is-liked");

    img.src = isLiked
      ? "../../assets/icons/paw-liked-red-icon.png"
      : "../../assets/icons/paw-like-icon.png";
  });
});
