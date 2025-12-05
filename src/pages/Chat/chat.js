// I installed google gen ai, npm install @google/genai

import { GoogleGenAI } from "@google/genai";


// Selecting elements to connect Javascript and HTML

const chatBox = document.querySelector('.chat-box');
const msgInput = document.getElementById('msg-input');
const sendBtn = document.getElementById('send-btn');
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;


let lastTimestamp = 0;

// the interval is set to  hours in milliseconds. it will give/update real timestamp every 3 hours a a text sent,  hours, 60 minutes per hour, 60 seconds per minute, milliseconds per second.
const TIMESTAMP_INTERVAL = 3 * 60 * 60 * 1000;


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
    const now = new Date();

  const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    });
  
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', `${sender}-message`);
  messageContainer.innerHTML = `<p>${text}</p>` + `${timeString}`;
  chatBox.appendChild(messageContainer );
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

   const currentTime = new Date().getTime();
   if(currentTime -lastTimestamp >= TIMESTAMP_INTERVAL){
    displayRealTimestamp(new Date());
    lastTimestamp === currentTime;
   }
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




// This function is to generate a real timestamp in the chat-box

function fetchingRealTimestamp(dataObject){


  const now = new Date();

let day = {weekday : 'long'};
let dayName = new Intl.DateTimeFormat('en-US', day).format(now);
  

let month = {month : 'long'};
let monthName = new Intl.DateTimeFormat('en-US', month).format(now);

let year = now.getFullYear()
  // Formating the time using the built in javascript method now.toLocaleTimeString()

let monthNum = now.getDay();
  
  return`${dayName}, ${monthName} ${monthNum}, ${year} `;
}

// This function is to display the real time that we are fetching

function displayRealTimestamp(){
  const timestampText = fetchingRealTimestamp();
  const timestampElement = document.createElement('p');
  timestampElement.classList.add('chat-timestamp');
  timestampElement.textContent = timestampText;
  chatBox.appendChild(timestampElement)

}


// An auto welcome message from the HappyPaws bot

document.addEventListener('DOMContentLoaded', () => {
  displayRealTimestamp();
  lastTimestamp = new Date().getTime();
  displayMessage('gemini', "Hello 👋 and welcome to HappyPaws🐾. I'm HappyPawsBot, how can I help you with questions about our pets and adoption process.");
});
