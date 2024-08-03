const { getSettings, saveSettings } = require("../services/settings_service");
const { validationResult } = require('express-validator');


async function getSettingsFromDatabase(req) {
  const {userId} = req;
  return getSettings(userId)
}

async function saveSettingsInDatabase(req) {
  const {userId, language, output, theme} = req;
  return saveSettings(userId, language, output, theme)
}

const handleGetSettings = async (req, res) => {
  try {
    const settings = await getSettingsFromDatabase(req.body);
    res.status(200).json(settings);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to retrieve settings' });
  }
}

const handleSaveSettings =  async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await saveSettingsInDatabase(req.body);
    res.status(200).json();
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to update settings' });
  }
}

module.exports = {
  handleGetSettings,
  handleSaveSettings
};