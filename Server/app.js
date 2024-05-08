const express = require('express');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const OUTPUT_DIR = path.join(__dirname, 'output');

// Importing secrets from .env file
dotenv.config({ path: './config.env' });

// Connecting to the database
require('./config/connectDatabase');

// Middleware to tackle cookies in the request
app.use(cookieParser());

// Middleware to tackle cors() errors
app.use(cors());

// Middleware to parse JSON data from requests
app.use(express.json());

// Function to run the Python script
function runPythonScript() {
    try {
        // Execute the Python script synchronously
        execSync('python3 contest_scraper.py');
        console.log('Python script successfully executed.');
    } catch (error) {
        console.error(`Error running Python script: ${error.message}`);
        throw error;
    }
}

// Function to load contests from file
function loadContests(platform) {
    try {
        const filePath = path.join(OUTPUT_DIR, `${platform}_contests.json`);
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return { error: 'File not found' };
    }
}

// Express route to get contests
app.get('/contests/:platform', (req, res) => {
    const { platform } = req.params;
    const contests = loadContests(platform);
    res.json(contests);
});

// Run the Python script before starting the Express app
try {
    runPythonScript();
} catch (error) {
    console.error('Exiting due to an error in running the Python script:', error.message);
    process.exit(1); // Exit the process if Python script fails
}

// All the accessible routes have to go here
app.use('/user', userRoutes);

// Defining the port from .env file
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
