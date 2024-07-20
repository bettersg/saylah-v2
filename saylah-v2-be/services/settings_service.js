const dbClient = require('../database_client/dbClient')
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');


const SETTINGS_TABLE_NAME = 'settings'

async function getSettings(userId) {

      try {
        const params = {
            TableName: SETTINGS_TABLE_NAME,
            Item: marshall({
                HashKey: "hashKey",
                NumAttribute: 1,
                BoolAttribute: true,
                ListAttribute: [1, "two", false],
                MapAttribute: { foo: "bar" },
                NullAttribute: null,
              },) // Marshal key
          };
        console.log(params)
        const data = await dbClient.send(new GetItemCommand(params));
        if (data.Item) {
          return unmarshall(data.Item); // Unmarshal item to JS object
        }
        return null;
      } catch (err) {
        console.error('Error getting user:', err);
        throw err;
      }
}

async function saveSettings(userID, language, output, theme) {
    const user = {
        userID,
        language,
        output,
        theme
    }

    const params = {
        TableName: SETTINGS_TABLE_NAME,
        Item: marshall(userID) // Marshal user object
      };
    
      try {
        await dbClient.send(new PutItemCommand(params));
    } catch (err) {
        console.error('Error saving user settings:', err);
        throw err;
      }
}
  
  module.exports = {
    getSettings,
    saveSettings
  };