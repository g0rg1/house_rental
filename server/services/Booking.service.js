import Booking from "../models/Booking.js"

class BookingService{
    async createBooking(userId , houseId , startDate , endDate){
        const existingBooking = await Booking.find({
            house:houseId,
            $or: [
                { startDate: { $lt: endDate, $gt: startDate } },
                { endDate: { $gt: startDate, $lt: endDate } },
            ],
        });
        if(existingBooking.length > 0){
            throw new Error("House is already booked")
        }

        const booking = new Booking({user:userId , house:houseId , startDate , endDate})
        return await booking.save()
    }
    async getUser(userId){
        return await Booking.find({user:userId}).populate('house')
    }
    async updateBookingStatus(bookingId, status) {
        return await Booking.findByIdAndUpdate(bookingId, { status }, { new: true });
    }
}

export default new BookingService()