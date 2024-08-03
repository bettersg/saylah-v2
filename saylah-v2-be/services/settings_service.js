const dynamoose = require("dynamoose");
const { UserSettings } = require('../models/settings');

async function getSettings(userId) {
      try {
        const settings = await UserSettings.get(userId)
        console.log(settings)
        return settings
      } catch (err) {
        console.error('Error getting settings:', err);
        throw err;
      }
}

async function saveSettings(userID, language, output, theme) {
      try {
        console.log(userID, language, output, theme)
        const settings = new UserSettings({"userId": userID, "language": language, "output": output, "theme": theme})
        await settings.save()
    } catch (err) {
        console.error('Error saving user settings:', err);
        throw err;
      }
}
  
module.exports = {
getSettings,
saveSettings
};