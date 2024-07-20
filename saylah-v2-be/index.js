const express = require('express');
const cors = require('cors'); // Import the cors middleware
const {getSettingsFromDatabase, saveSettingsInDatabase} = require('./controller/settings_controller')

const app = express();

// Enable CORS for all routes (adjust as needed)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/settings', async (req, res) => {
  try {
    const settings = await getSettingsFromDatabase(req.userId);
    res.status(200).json(settings);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve settings' });
  }
});

app.post('/settings', async (req, res) => {
  const {userId, language, output, theme} = req.body;

  try {
    await saveSettingsInDatabase(userId, language, output, theme);
    res.status(200).json();
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

app.listen()