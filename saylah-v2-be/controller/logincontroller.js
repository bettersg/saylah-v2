const { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand, GlobalSignOutCommand } = require('@aws-sdk/client-cognito-identity-provider');

const client = new CognitoIdentityProviderClient({
  region: 'ap-southeast-1',
  credentials: {
    accessKeyId: '',
    secretAccessKey: ''
  }
});

async function registerUser(email, password, nickname, phoneNumber, address, name) {
  const userAttributes = [
    { Name: 'email', Value: email },
    { Name: 'nickname', Value: nickname },
    { Name: 'phone_number', Value: phoneNumber },
    { Name: 'address', Value: address },
    { Name: 'name', Value: name }
  ];

  const signUpCommand = new SignUpCommand({
    ClientId: '',
    Username: email,
    Password: password,
    UserAttributes: userAttributes
  });

  try {
    const response = await client.send(signUpCommand);
    console.log('User registered successfully:', response.UserConfirmed ? 'User confirmed' : 'User confirmation required');
    // Handle user confirmation if required
  } catch (err) {
    console.error('Registration error:', err);
  }
}

async function loginUser(email, password) {
  const authCommand = new InitiateAuthCommand({
    ClientId: '',
    AuthFlow: 'USER_PASSWORD_AUTH',
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password
    }
  });

  try {
    const response = await client.send(authCommand);
    const accessToken = response.AuthenticationResult.AccessToken;
    const idToken = response.AuthenticationResult.IdToken;
    console.log('User logged in successfully:', email);
    console.log('Access Token:', accessToken);
    console.log('ID Token:', idToken);
    // Use the tokens for secure API access or other purposes
  } catch (err) {
    console.error('Login error:', err);
  }
}

async function logoutUser(accessToken) {
  const globalSignOutCommand = new GlobalSignOutCommand({
    GlobalSignOutRequest: {
      AccessToken: accessToken
    }
  });

  try {
    await client.send(globalSignOutCommand);
    console.log('User logged out successfully');
  } catch (err) {
    console.error('Logout error:', err);
  }
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
