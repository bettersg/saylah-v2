require('dotenv').config();

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { fromEnv } = require("@aws-sdk/credential-providers");


const dbClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: 
    fromEnv(),
});

module.exports = dbClient;