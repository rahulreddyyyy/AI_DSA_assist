// UI-related functions

/**
 * Add a message to the chat display
 * @param {string} message - The message text
 * @param {boolean} isUser - Whether the message is from the user
 */
function addMessage(message, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = isUser ? 'message user-message' : 'message assistant-message';
    
    // Process message content (handle line breaks, code blocks, etc.)
    messageElement.innerHTML = formatMessage(message);
    
    // Add timestamp
    const timeElement = document.createElement('div');
    timeElement.className = 'message-time';
    timeElement.textContent = 'Just now';
    messageElement.appendChild(timeElement);
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

/**
 * Format message text with links and line breaks
 * @param {string} message - The raw message text
 * @returns {string} Formatted HTML
 */
function formatMessage(message) {
    // Replace URLs with clickable links
    message = message.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    
    // Replace line breaks with <br>
    message = message.replace(/\n/g, '<br>');
    
    return message;
}

/**
 * Show thinking animation while waiting for response
 * @returns {Element} The thinking animation element
 */
function showThinking() {
    const chatMessages = document.getElementById('chatMessages');
    const thinkingElement = document.createElement('div');
    thinkingElement.className = 'thinking';
    thinkingElement.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(thinkingElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return thinkingElement;
}

/**
 * Hide thinking animation
 * @param {Element} thinkingElement - The element to remove
 */
function hideThinking(thinkingElement) {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.removeChild(thinkingElement);
}