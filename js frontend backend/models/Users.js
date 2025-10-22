const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    age: Number
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
