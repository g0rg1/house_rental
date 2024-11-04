import mongoose from "mongoose";

const House = new mongoose.Schema({
    title:{
        type:String ,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address: {
        street: {
            type: String,
            required: true, 
            trim: true,
        },
        city: {
            type: String,
            required: true, 
            trim: true,
        },
        state: {
            type: String,
            required: true, 
            trim: true,
        },
        zipCode: {
            type: String,
            required: true, 
            trim: true,
        },
    },
    pricePerNight:{
        type:Number,
        required:true,
        min:0,
    },
    amentities:{
        type:[String],
        default:[],
    },
    images:{
        type:[String],
        default:[],
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ', 
        required: true,
    },
    availability: {
        type: Boolean,
        default: true, 
    },

})

export default mongoose.model('House' , House)