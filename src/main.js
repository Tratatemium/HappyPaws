import { loadPetDataFromJSON } from "./load-data.js"

export const state = {
    data: [],
}

const init = async () => {
    await loadPetDataFromJSON();
    console.log(state);
};

init();