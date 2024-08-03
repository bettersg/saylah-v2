const dynamoose = require("dynamoose");

const userSettingsSchema = new dynamoose.Schema({
    "userId": String,
    "language": String,
    "output": String,
    "theme": String,
}, {
    "saveUnknown": true,
    "timestamps": true
});

const UserSettings = dynamoose.model("settings", userSettingsSchema)

module.exports = {
    UserSettings
};