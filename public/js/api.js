/**
 * Send a request to the GPT API through our backend
 * @param {string} leetcodeUrl - The LeetCode problem URL
 * @param {string} userMessage - The user's question
 * @returns {Promise<string>} The assistant's response
 */

/* below is the real api fetch request 
async function generateResponse(leetcodeUrl, userMessage) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ leetcodeUrl, userMessage }),
        });
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error calling API:', error);
        throw new Error('Failed to generate response');
    }
}
*/

/**
 * Generate a response using the sample responses (simulates API call)
*/
function generateResponse(leetcodeUrl, userMessage) {
    return new Promise((resolve) => {
        // Sample responses for demo purposes
        const sampleResponses = [
            "Let's analyze this problem step by step. What's the first constraint you notice in the problem statement?",
            "Good question! Before diving into the solution, let's think about what data structure would be most appropriate here. What are the operations we need to perform efficiently?",
            "I notice you're trying to optimize for time complexity. Have you considered using a different data structure? Hash maps can provide O(1) lookups which might help in this case.",
            "This is a classic example where we can apply dynamic programming. Let's break down the problem into smaller subproblems. What would be the base case here?",
            "The key insight for this problem is recognizing the pattern. Can you identify any overlapping subproblems that we're calculating multiple times?",
            "Let's try to understand the problem with a small example. If the input was [1, 2, 3], what would be the expected output and why?"
        ];
        
        // Extract problem name from URL
        const problemMatch = leetcodeUrl.match(/https?:\/\/leetcode\.com\/problems\/([^/]+)/);
        let problemName = "";
        
        if (problemMatch && problemMatch[1]) {
            problemName = problemMatch[1].replace(/-/g, ' ');
        }
        let response = "";
        if (problemName) {
            // If it's a valid LeetCode problem URL, generate a personalized response
            const baseResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
            response = `I see you're working on the "${problemName}" problem. ${baseResponse}\n\n`;
        } else {
            // If it's not a valid LeetCode URL, provide a different response
            response = "It looks like you didn't enter a valid LeetCode problem link. Please provide a valid problem URL.";
        }
        
        
        // Add additional guidance based on keywords in the user's message
        if (userMessage.toLowerCase().includes("time complexity")) {
            response += "When analyzing time complexity, remember to consider the worst-case scenario and how the algorithm scales with input size. Is there a more efficient data structure we could use here?";
        } else if (userMessage.toLowerCase().includes("dynamic programming")) {
            response += "For dynamic programming problems, try defining your state clearly and think about how to transition between states. What information do you need to carry forward from previous computations?";
        } else if (userMessage.toLowerCase().includes("recursion")) {
            response += "When working with recursion, always identify your base case first, then think about how to break the problem into smaller instances of the same problem.";
        } else {
            response += "Let's approach this methodically. Can you tell me more specifically what part of the problem is giving you trouble?";
        }
        
        // Simulate API delay
        setTimeout(() => {
            resolve(response);
        }, 1500);
    });
}