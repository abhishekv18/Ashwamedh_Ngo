import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    phone: {
        type: Number,
        required:true
    },
    message:{
        type:String,
        required:true,
    },  
    preferredContact:{
        type:String,
        default:'email',
        enum:['email','phone'],
        required:true
    }, 
    },
{timestamps:true});
export const Contact = mongoose.model('Contact', contactSchema);