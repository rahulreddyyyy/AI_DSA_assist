const { OpenAI } = require('openai');
const { formatPrompt } = require('./promptUtils');

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

/**
 * Process a user prompt with GPT and return the response
 * @param {string} leetcodeUrl - The LeetCode problem URL
 * @param {string} userMessage - The user's question about the problem
 * @returns {Promise<string>} The generated response
 */
async function processPrompt(leetcodeUrl, userMessage) {
    try {
        // Format the prompt for GPT
        const promptText = formatPrompt(leetcodeUrl, userMessage);
        
        // Call the OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-4", // Or your preferred model
            messages: [
                {
                    role: "system",
                    content: "You are an expert teaching assistant for data structures and algorithms problems. Your goal is to guide students to solve problems on their own through the Socratic method and targeted hints, without providing complete solutions."
                },
                {
                    role: "user",
                    content: promptText
                }
            ],
            temperature: 0.7,
            max_tokens: 1000
        });
        
        // Extract and return the response
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        throw new Error('Failed to generate response');
    }
}

module.exports = { processPrompt };