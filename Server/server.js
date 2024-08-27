// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formsRouter = require('./Router/formsRouter');
const userRouter = require('./Router/userRouter');
const adminRouter = require('./Router/adminRouter')

const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const CustomError = require('./Utils/customError');
const globalErrorHandler = require('./Controllers/errorController');

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
app.use('/api/users', userRouter);
app.use('api/admin', adminRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
