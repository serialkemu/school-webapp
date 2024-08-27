// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formsRouter = require('./Router/formsRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb+srv://damonitor:dam123@cluster0.t8ra2vx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));


// POST route to handle form submissions
app.use('/api', formsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
