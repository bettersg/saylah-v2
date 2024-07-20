const { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand, GlobalSignOutCommand } = require('@aws-sdk/client-cognito-identity-provider');
const express = require("express");
const app = express();

const client = new CognitoIdentityProviderClient({
  region: 'ap-southeast-1',
  credentials: {
    accessKeyId: '',
    secretAccessKey: ''
  }
});


module.exports = {
};
