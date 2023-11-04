function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  if (username && message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);

    // Clear the message input
    document.getElementById('message').value = '';

    // Save the chat messages to localStorage
    const messages = chatMessages.innerHTML;
    localStorage.setItem('chatMessages', messages);
  }
}

// Load chat messages from localStorage on page load
/*window.addEventListener('load', () => {
  const chatMessages = document.getElementById('chat-messages');
  const savedMessages = localStorage.getItem('chatMessages');
  if (savedMessages) {
    chatMessages.innerHTML = savedMessages;
  }
});
*/
