/**
 * Extract the problem title from a LeetCode URL
 * @param {string} url - The LeetCode problem URL
 * @returns {string} The extracted problem title
 */
function extractProblemTitle(url) {
    try {
        const match = url.match(/problems\/([^/]+)/);
        if (match && match[1]) {
            return match[1].replace(/-/g, ' ');
        }
        return "the problem";
    } catch (error) {
        return "the problem";
    }
}

/**
 * Format the prompt for the GPT model
 * @param {string} leetcodeUrl - The LeetCode problem URL
 * @param {string} userMessage - The user's question
 * @returns {string} Formatted prompt text
 */
function formatPrompt(leetcodeUrl, userMessage) {
    const problemTitle = extractProblemTitle(leetcodeUrl);
    
    return `
PROBLEM URL: ${leetcodeUrl}
PROBLEM TITLE: ${problemTitle}
STUDENT QUESTION: ${userMessage}

Based on the above information, I should:
1. Acknowledge the specific problem the student is working on
2. Address their specific question or doubt
3. Break down the relevant concepts
4. Guide with questions rather than answers
5. Provide targeted hints that lead to insight
6. Avoid revealing complete solutions or algorithms

My response should be encouraging and Socratic, helping the student develop their own problem-solving abilities.
`;
}

module.exports = { formatPrompt, extractProblemTitle };