const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();

// Enable CORS for all routes (adjust as needed)
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
