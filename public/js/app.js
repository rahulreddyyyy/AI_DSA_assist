// Main application logic

document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendButton');
    const userMessageInput = document.getElementById('userMessage');
    
    // Initialize chat with welcome message
    initializeChat();
    
    // Event listener for the send button
    sendButton.addEventListener('click', function() {
        sendMessage();
    });
    
    // Event listener for pressing Enter in the textarea
    userMessageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
});