import moongoose from "moongoose"

const userSchema  = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true,"Please provide a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Please provide a Password"]
    },
    isVerfied: {
        type: Boolean,
        default: false  
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})


const User = moongoose.models.users || mongoose.model("users",userSchema)

export default User