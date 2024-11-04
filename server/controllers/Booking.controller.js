import BookingService from "../services/Booking.service.js"
class BookingController{

    async createBooking(req, res) {
        const { user, house, startDate, endDate } = req.body;
    
        try {
            const booking = await BookingService.createBooking(user, house, startDate, endDate);
            res.status(201).json(booking);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: e.message });
        }
    }
    async getUser(req,res){
        const userId = req.params.userId;

        try {
            const bookings = await BookingService.getUser(userId);
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async updateBookingStatus(req, res) {
        const bookingId = req.params.id;
        const { status } = req.body;

        try {
            const updatedBooking = await BookingService.updateBookingStatus(bookingId, status);
            res.status(200).json(updatedBooking);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}


export default new BookingController()