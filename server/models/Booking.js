import mongoose from "mongoose";

const Booking = mongoose.Schema({

    user:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true,
    },
    house:{
        type:mongoose.Types.ObjectId,
        ref:'House',
        required:true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending',
    },
});

export default mongoose.model('Booking' , Booking)