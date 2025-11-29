/**
 * Data loading utilities for HappyPaws pet adoption app
 */

import { state } from "./main.js"

/**
 * Loads pet data from a JSON file and updates the global state
 * @param {string} JSONaddress - Path to the JSON file containing pet data
 * @returns {Promise<void>} - Resolves when data is successfully loaded
 * @throws {Error} - Throws error if fetch fails or JSON is invalid
 */
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