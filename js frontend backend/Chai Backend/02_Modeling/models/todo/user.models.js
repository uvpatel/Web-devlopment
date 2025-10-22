import mongoose from "mongoose"; // import

// const userSchema = new mongoose.Schema({
//     username: String, // database structure
//     email: String
//     isActive: Boolean
// }) // schema define Schema it takes object as arg?


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        // required: true
        required: [true, "passwor is required"]
    }
    
}, {timestamps: true})
export const User = mongoose.model("User",userSchema) // export .model takes two args whose and on what basis


// users in mongodb mongodb convert into plural and lowercase