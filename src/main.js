import { loadPetDataFromJSON } from "./load-data.js";

export const state = {
  data: [],
};

const init = async () => {
  await loadPetDataFromJSON();
  console.log(state); // Just for development conviniance
};

init();

window.addEventListener("DOMContentLoaded", () => {
  window.location.replace("src/pages/loading-page/loading-page.html");
});
