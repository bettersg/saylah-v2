const { getSettings, saveSettings } = require("../services/settings_service");

async function getSettingsFromDatabase(userId) {
  return getSettings(userId)
}

async function saveSettingsInDatabase(userId, language, output, theme) {
  return saveSettings(userId, language, output, theme)
}

module.exports = {
  getSettingsFromDatabase,
  saveSettingsInDatabase
};