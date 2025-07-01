import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     dateOfBirth: {
        type: Date,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum:['Male','Female','Other'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    pinCode:{
        type:Number,
        required:true,
    },  
   occupation:{
        type:String,
      //  enum:['School Student','College Student','Working Professional','Retired','Home Maker','Other','Business','Self Employed'],
        required:true
    }, 
    },
{timestamps:true});
export const Volunteer = mongoose.model('Volunteer', volunteerSchema);