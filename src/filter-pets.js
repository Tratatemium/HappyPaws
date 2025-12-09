export const filterByPetCategory = (category) => {
    if (!['all','dog', 'cat', 'bird', 'rabbit'].includes(category)) {
        console.error('Invalid input to filterByPetCategory()');
        return;
    }

    const petCards = Array.from(document.querySelectorAll('.pet-card'));
    
}   

export const onPetTypeButtonClick = (event) => {
    button = event.target;
}
