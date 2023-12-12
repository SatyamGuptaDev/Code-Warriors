// Importing necessary modules and styles
import React, { useEffect } from 'react';
import './web.css';
import { Sidebar } from '../../components/SideBar';
import { FaRobot } from "react-icons/fa";

// Main component for the chatbot functionality
function Chatbot() {
  useEffect(() => {
    // DOM elements and API key initialization
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const closeBtn = document.querySelector('.close-btn');
    const chatbox = document.querySelector('.chatbox');
    const chatInput = document.querySelector('.chat-input textarea');
    const sendChatBtn = document.querySelector('.chat-input span');

    let userMessage = null;
    const inputInitHeight = chatInput.scrollHeight;
    const API_KEY = "AIzaSyCgwOASjaX7NcnDbkCexcL7VjnoMQJyfLQ"; 

    // Function to create a chat message element
    const createChatLi = (message, className = "outgoing") => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);

      let chatContent =
        className === "outgoing"
          ? '<p></p>'
          : '<span style="display: flex; justifyContent: center; alignItems: center;">' +
            '<FaRobot class="farobot" style="width: 20px; height: 20px;"></FaRobot>' +
            '</span><p></p>';

      chatLi.innerHTML = chatContent;
      chatLi.querySelector("p").textContent = message;
      return chatLi;
    };

    // Function to generate a response using an external API
    const generateResponse = (chatElement) => {
      const API_URL = "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText";
      const messageElement = chatElement.querySelector("p");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: { text: userMessage },
        }),
      };

      fetch(`${API_URL}?key=${API_KEY}`, requestOptions)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          messageElement.textContent = data.candidates[0].output.trim();
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          messageElement.classList.add("error");
          messageElement.textContent = "Oops! Something went wrong. Please try again.";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
    };

    // Function to handle user input and initiate the chat process
    const handleChat = () => {
      userMessage = chatInput.value.trim();
      if (!userMessage) return;

      chatInput.value = "";
      chatInput.style.height = `${inputInitHeight}px`;

      chatbox.appendChild(createChatLi(userMessage, "outgoing"));
      chatbox.scrollTo(0, chatbox.scrollHeight);

      setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
      }, 600);
    };

    // Event listeners for input and button clicks
    chatInput.addEventListener("input", () => {
      chatInput.style.height = `${inputInitHeight}px`;
      chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
      }
    });

    sendChatBtn.addEventListener("click", handleChat);
    closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

    // End of your JavaScript code
  }, []); // Empty dependency array means this effect will only run once when the component mounts

  // JSX structure for the chatbot component
  return (
    <>
      <div className=' body-chat  fade-in'>
        <div className=' sidebar-app text-white absolute top-5 left-5 ' style={{ opacity: '1'}}>
          <Sidebar />
        </div>
        <div className="flex-container">
          <button className="chatbot-toggler"></button>
          <div className="chatbot">
            <header>
              <h2>Ask Your Doubts</h2>
              <span className="close-btn material-symbols-outlined">close</span>
            </header>
            <ul className="chatbox">
              <li className="chat incoming">
                <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <FaRobot className="farobot" style={{ width: '20px', height: '20px' }} />
                </span>
                <p>Hi there 👋<br />How can I help you today?</p>
              </li>
            </ul>
            <div className="chat-input">
              <textarea placeholder="Enter a message..." spellCheck="false" required></textarea>
              <span id="send-btn" className="material-symbols-rounded">send</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the Chatbot component as the default export
export default Chatbot;
