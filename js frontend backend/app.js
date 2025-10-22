const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // allow frontend requests
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/users')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
