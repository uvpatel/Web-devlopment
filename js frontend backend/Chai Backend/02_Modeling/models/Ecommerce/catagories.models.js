import mongoose from "mongoose";

const catagorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, {timestamps: true})

export const Category = mongoose.model("Category",catagorySchema)
