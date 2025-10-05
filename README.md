# DSA Teaching Assistant

A chat-based application that helps users understand and solve Data Structures and Algorithms (DSA) problems by providing guidance, hints, and intuition building rather than direct solutions.

## Overview

This application provides a user-friendly chat interface where users can submit LeetCode problem URLs along with their specific questions or doubts. The backend integrates with GPT to generate thoughtful responses that guide users toward solving problems on their own through Socratic questioning and conceptual explanations.

## Features

- Clean, intuitive chat interface
- Ability to submit LeetCode problem URLs
- Guided assistance without providing direct solutions
- Real-time conversation with a GPT-powered teaching assistant
- Code highlighting for sharing code snippets

## Architecture

```
📦 Project Root
├── 📂 public             # Main application HTML and inline CSS/JS  
│   ├── 📂 css
│   │   └── styles.css
│   ├── 📂 js
│   │   ├── api.js
│   │   ├── app.js
│   │   ├── chat.js
│   │   └── ui.js
│   └── index.html  
│  
├── 📜 README.md              # This documentation  
├── 📜 prompt-examples.md     # Example prompts for GPT integration  
│  
└── 📂 server                 # Backend implementation  
    ├── app.js               # Express server setup  
    ├── gptService.js        # GPT API integration  
    └── promptUtils.js       # Prompt management utilities  

```

### Frontend

The frontend is built with vanilla HTML, CSS, and JavaScript for simplicity. It features:

- Responsive design that works on both desktop and mobile devices
- Real-time message display with typing indicators
- Form validation and user feedback
- Message formatting for code snippets and URLs

### Backend (Implementation Guide)

The backend should be implemented using Node.js with Express and should handle:

1. Receiving requests from the frontend
2. Validating LeetCode URLs
3. Formatting prompts for the GPT API
4. Sending requests to the GPT API
5. Processing and returning responses

## GPT Integration

The application uses GPT to generate responses based on carefully crafted prompts. The prompt structure follows this general pattern:

```
You are a teaching assistant for data structures and algorithms. Your goal is to help the student understand and solve the problem on their own without giving away the full solution.

PROBLEM: {leetcode_url}
STUDENT QUESTION: {user_question}

Your response should:
1. Ask clarifying questions if needed
2. Guide the student toward the appropriate approach
3. Provide hints rather than solutions
4. Use the Socratic method to help the student discover insights
5. Suggest relevant concepts or patterns that might apply
6. Avoid giving away complete algorithms or full solutions

Respond in a helpful, encouraging tone.
```

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- An API key for a GPT service (e.g., OpenAI API)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/rahulreddyyyy/dsa-asist.git
   cd dsa-assist
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your API key:
   ```
   GPT_API_KEY=your_api_key_here
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage Guide

1. Enter a LeetCode problem URL in the top input field
2. Describe your specific doubt or question about the problem in the text area
3. Click "Send" or press Enter to submit
4. The assistant will analyze your question and provide guidance
5. Continue the conversation by asking follow-up questions

## Prompt Examples and Guidelines

For detailed examples of effective prompts and guidelines for GPT integration, see [prompt-examples.md](prompt-examples.md).
