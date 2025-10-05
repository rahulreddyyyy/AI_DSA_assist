// Chat functionality

/**
 * Send a message from the user to the assistant
 */
async function sendMessage() {
    const leetcodeUrl = document.getElementById('leetcodeUrl').value.trim();
    const userMessage = document.getElementById('userMessage').value.trim();
    
    if (!leetcodeUrl) {
        alert("Please provide a LeetCode problem URL.");
        return;
    }
    
    if (!userMessage) {
        alert("Please describe your doubt or question.");
        return;
    }
    
    // Add user message to chat
    addMessage(leetcodeUrl + "\n\n" + userMessage, true);
    
    // Clear input fields
    document.getElementById('userMessage').value = '';
    
    // Show thinking animation
    const thinkingElement = showThinking();
    
    try {
        // Get response from API (or mock)
        const response = await generateResponse(leetcodeUrl, userMessage);
        
        // Hide thinking animation
        hideThinking(thinkingElement);
        
        // Add assistant response
        addMessage(response, false);
    } catch (error) {
        // Hide thinking animation
        hideThinking(thinkingElement);
        
        // Add error message
        addMessage("Sorry, I encountered an error processing your request. Please try again.", false);
        console.error("Error generating response:", error);
    }
}

/**
 * Initialize the welcome message
 */
function initializeChat() {
    // Add welcome message
    addMessage("Welcome to the DSA Teaching Assistant! I'm here to help you understand data structures and algorithms problems. Please provide a LeetCode problem URL and your specific question or doubt. I'll guide you through the problem-solving process without giving away the complete solution.", false);
}