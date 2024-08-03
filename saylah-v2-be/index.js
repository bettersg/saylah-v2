require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Import the cors middleware
const { checkSchema } = require('express-validator');

const settings_controller = require('./controller/settings_controller')
const settings_validator = require('./validators/settings_validator')

const app = express();

// Enable CORS for all routes (adjust as needed)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/settings', settings_controller.handleGetSettings);
app.post('/settings', checkSchema(settings_validator), settings_controller.handleSaveSettings);

app.listen()
