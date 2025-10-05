const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { processPrompt } = require('./gptService');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
    try {
        const { leetcodeUrl, userMessage } = req.body;
        
        // Validate input
        if (!leetcodeUrl || !userMessage) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Process with GPT
        const response = await processPrompt(leetcodeUrl, userMessage);
        
        // Return response
        res.json({ response });
    } catch (error) {
        console.error('Error processing chat request:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`DSA Teaching Assistant server running on port ${port}`);
});