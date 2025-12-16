

import pets from "../../assets/pet-data.json";
const termsToggle = document.getElementById('toggle');
 const submitBtn = document.getElementById('submit-adoption');
 const adoptionForm = document.querySelector('form');
       const requiredInputs = document.querySelectorAll('.input');






       function getPetIdFromUrl(){
         const params = new URLSearchParams(window.location.search);
         return params.get('petId');
       }
    


       function gtePetById(petId){
return pets.find(pet => pet.id === petId);
       }




       function renderCheckoutPetCard(pet){
     
         const petcard = document.querySelector(".pet-card");




         if(!pet)return;




        petcard.innerHTML = `
   <img src="${pet.image_urls[0]}" alt="${pet.name}" class="checkout-pet-img" />


   <div class="pet-info">
     <h3>${pet.name}</h3>
     <p>${pet.gender} , ${pet.age.value} ${pet.age.unit}</p>
     <p>${pet.breed}</p>
     <p class="fee"> Loaction : Stockholm </strong></p>
   </div>
 `;


       }




document.addEventListener('DOMContentLoaded', ()=>{


       const list = document.createElement('div');
       list.classList.add('generated-terms')
       list.classList.add('hidden');
       const listContainer = document.querySelector('.term-list')
       list.innerHTML=`     <div class='ul-list'>
       <p> By adopting a pet from HappyPaws, you agree to:</p>
       <ul>
<li>
Provide proper veterinary care throughout the pet's life </li>
<li>
Keep the pet indoors and provide a safe environment </li>


<li>Never abandon, abuse, or neglect the animal</li>
<li>Spay/neuter the pet if not already done (age appropriate)</li>
 <li>Provide adequate food, water, shelter, and love</li>
<li>Allow HappyPaws to conduct follow-up welfare checks</li>
<li>Return the pet to HappyPaws if unable to care for them </li</ul>
<p>Adoption fee: 1500 SEK (includes vaccinations, microchip, and spay/neuter)*</p>
           </div>


 <div class='checkbox-container'>
   <input id="checkbox"  title="checkbox" type="checkbox" required/>
   <p>I accept the terms and conditions of adoption and understand the responsibilities involved in pet ownership </p>
      </div>
        
       `   




       termsToggle.addEventListener('click', ()=>{
         termsToggle.classList.toggle('active');
          
           const currentTerms = listContainer.querySelector('.generated-terms');
        
           if(currentTerms){
           currentTerms.classList.toggle('hidden');
     
           }else{
             listContainer.innerHTML = list;
                termsToggle.classList.toggle('active');
               
           }
       })






       const petId = getPetIdFromUrl()


 if (!petId) {
   console.error("No pet ID in URL");
   return;
 }


 const pet = gtePetById(petId)


 if (!pet) {
   console.error("Pet not found");
   return;
 }


renderCheckoutPetCard(pet);


       
listContainer.appendChild(list)
      });




      
// I have added form validation to ensure all required fields are filled before submission and also preventing default submit action.


      submitBtn.addEventListener('click', (event)=>{


       let formIsvalid =true;
    
 document.querySelectorAll('.error-text').forEach(error=>{
   error.textContent= '';
 })


 requiredInputs.forEach(input =>{
  
   const errorContainer = document.getElementById(input.id + '-error');


  


       if(input.value.trim() === ''){
       event.preventDefault();
   formIsvalid = false;
           const errorText = document.createElement('p');
       errorText.classList.add('error-text');
       errorText.textContent= `PLease fill in your ${input.id.toUpperCase()} `;
       errorText.style.color ='red';
       if(errorContainer){
 errorContainer.appendChild(errorText);
       }


       }


       if(formIsvalid){
         console.log('valid')
         event.preventDefault();
         showToast('Application Submitted Successfully!');
       }
 })
      })






// This is a toast message that will appear for 3 seconds when the form is sucessfully submitted
function showToast(message) {
  
   const toast = document.getElementById('toast');
   const toastText =document.createElement('p');


   if (toast) {
       if (message) {
           toast.textContent = message;
       }
      
       toast.classList.add('show');
         toast.style.display ='block';
               toast.appendChild(toastText);
       setTimeout(() => {
                 toast.classList.remove('show');
           toast.style.display ='none'
       }, 3000);
   }
}
