// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formsRouter = require('./Router/formsRouter');
const userRouter = require('./Router/userRouter');
const adminRouter = require('./Router/adminRouter');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const CustomError = require('./Utils/customError');
const globalErrorHandler = require('./Controllers/errorController');

// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.name, err.message);
  console.error('Shutting down due to uncaught exception...');
  process.exit(1);
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies


// POST route to handle form submissions
app.use('/api', formsRouter);
app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);
app.all('*', (req, res, next) => {
  const err = new CustomError(`Can't find ${req.originalUrl} on the server!`, 404);
  next(err);
});

// Error handling middleware
app.use(globalErrorHandler);

// Connect to MongoDB and start the server
mongoose.connect(process.env.CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Start the server
        const PORT = process.env.PORT || 5000;
        const server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });

        // Handling unhandled rejections
        process.on('unhandledRejection', (err) => {
            console.error('Unhandled Rejection:', err.name, err.message);
            console.error('Shutting down due to unhandled rejection...');
            server.close(() => {
                process.exit(1);
            });
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });
