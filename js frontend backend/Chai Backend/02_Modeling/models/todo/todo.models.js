import mongoose from "mongoose";
import { SubTodo } from "./subtodo.models";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
        //refrence of other model name is model creation
    },
    SubTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]

    // array of subtodo
},{timestamps})

export const Todo = mongoose.model("Todo",todoSchema)