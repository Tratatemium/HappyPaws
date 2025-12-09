export const filterByPetSpecies = (species) => {
    if (!['all','dog', 'cat', 'bird', 'rabbit'].includes(species)) {
        console.error('Invalid input to filterByPetSpecies()');
        return;
    }

    const petCards = Array.from(document.querySelectorAll('.pet-card'));

    petCards.forEach(petCard => {
        if (species === 'all' || petCard.classList.contains(species)) {
            petCard.classList.remove('hidden');
        } else {
            petCard.classList.add('hidden');
        }
    });
}   

export const onPetSpeciesButtonClick = (chip) => {
    const allSpecies = ['dog', 'cat', 'rabbit', 'bird'];
    const species = allSpecies.find(species => chip.classList.contains(species)) || 'all';
    filterByPetSpecies(species);
}
