import { state } from "./main.js"

export const loadPetDataFromJSON = async (JSONaddress = "./src/assets/pet-data.json") => {
  try {
    const response = await fetch(JSONaddress);

    if (!response.ok) {
      throw new Error(`Failed to load JSON: ${response.status}`);
    }
    const data = await response.json();
    state.data = [...data];

  } catch (err) {
    console.error("Error loading JSON:", err);
    throw err;
  }
};