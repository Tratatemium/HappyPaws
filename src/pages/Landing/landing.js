import { onPetSpeciesButtonClick } from '../../filter-pets.js'

// Category button active state
const chips = document.querySelectorAll(".chip");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");
    onPetSpeciesButtonClick(chip);
  });
});
