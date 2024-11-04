import { Router } from "express";
import BookingController from "../controllers/Booking.controller.js";

const bookingRouter = new Router();

bookingRouter.post('/' , BookingController.createBooking);
bookingRouter.get('/:id' , BookingController.getUser)

export default bookingRouter;