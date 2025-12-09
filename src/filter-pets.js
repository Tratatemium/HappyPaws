export const filterByPetSpecies = (species) => {
    if (!['all','dog', 'cat', 'bird', 'rabbit'].includes(species)) {
        console.error('Invalid input to filterByPetSpecies()');
        return;
    }

    const petCards = Array.from(document.querySelectorAll('.pet-card'));

    petCards.forEach(petCard => {
        if (species === 'all' || petCards.classList.contains(species)) {
            petCards.classList.remove('hidden');
        } else {
            petCards.classList.add('hidden');
        }
    });
}   

export const onPetTypeButtonClick = (event) => {
    button = event.target;
}
