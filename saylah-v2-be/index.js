const express = require('express');
const cors = require('cors'); // Import the cors middleware
const { registerUser, loginUser, logoutUser } = require('./controller/logincontroller');

const app = express();

// Enable CORS for all routes (adjust as needed)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Register routes
app.post('/register', async (req, res) => {
  try {
    const { email, password, nickname, phoneNumber, address, name } = req.body;
    await registerUser(email, password, nickname, phoneNumber, address, name);
    res.status(200).send('User registered successfully');
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    await loginUser(email, password);
    res.status(200).send('User logged in successfully');
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Error logging in user');
  }
});

app.post('/logout', async (req, res) => {
  try {
    const { accessToken } = req.body;
    await logoutUser(accessToken);
    res.status(200).send('User logged out successfully');
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).send('Error logging out user');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
