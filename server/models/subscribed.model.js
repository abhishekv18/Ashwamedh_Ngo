import mongoose from "mongoose";

const subscribedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    },
{timestamps:true});
export const Subscribed = mongoose.model('Subscribed', subscribedSchema);