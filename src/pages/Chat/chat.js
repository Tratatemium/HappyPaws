// I installed google gen ai, npm install @google/genai

import { GoogleGenAI } from "@google/genai";


// Selecting elements to connect Javascript and HTML

const chatBox = document.querySelector('.chat-box');
const msgInput = document.getElementById('msg-input');
const sendBtn = document.getElementById('send-btn');
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if(!apiKey) {
  console.log('Gemini API Key was not found...')
}


const ai = new GoogleGenAI({apiKey});

// here I'm specifiying which ai model to use . gemini-2.5-flash is fast and efficient for converstional tasks
const model = "gemini-2.5-flash";


// Here creating a stateful chat session. Ai will remember the previous chat messages. Very important for user experience to avoid sending the entire history every time.
//I'm also giving the bot system instruction to define the it's persona. 

const chatSession = ai.chats.create({
model : model,
config:{
  systemInstruction : "You are 'HappyPaws', a friendly and helpful AI assistant for a pet adoption website. Keep your answers brief and focused on pets, adoption, or general advice for pet owners.",
},

});




// This displayMessage function is to dynamically create and insert and new message bubble into the chat-box element

function displayMessage (sender, text){
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', `${sender}-message`);
  messageContainer.innerHTML = `<p>${text}</p>`;
  chatBox.appendChild(messageContainer);
  chatBox.scrollTop = chatBox.scrollHeight;
}



//Using the async key word to communicate with the google server,  await to let javascripts pause and wait for the response to come back from the server before excuting the new line.


async function getGeminiResponse(message){
  try{
    const response = await chatSession.sendMessage({
      message: message

    });
    
    const geminiText = response.text;
    displayMessage('gemini', geminiText);

  }catch(error){
    console.log("Error fetching Gemini response:", error);
    displayMessage('error', "sorry, I ran into an error. please try again.");
  }
}

//This userInput is the function that handles user input, it checks if the user typed anything.

async function userInput(){

   const userMessage = msgInput.value.trim();
   if(userMessage === "") return;

   displayMessage('user', userMessage);
   msgInput.value = "";


   await getGeminiResponse(userMessage);
}



sendBtn.addEventListener('click', userInput);
msgInput.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
    e.preventDefault();
    userInput();
  }
});


// An auto welcome message from the HappyPaws bot

document.addEventListener('DOMContentLoaded', () => {
  displayMessage('gemini', "Hello 👋 and welcome to HappyPaws🐾. I'm HappyPawsBot, how can I help you with questions about our pets and adoption process.");
});


