import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import houseRouter from './routes/House.routes.js'
import userRouter from './routes/User.routes.js'
import bookingRouter from './routes/Booking.routes.js'


const app = express()
app.use(express.json())
app.use('/api/users' , userRouter);
app.use('/api/houses' , houseRouter);
app.use('/api/booking' , bookingRouter);
dotenv.config()

const PORT = process.env.PORT || 5500
const LINK = process.env.LINK

async function startApp() {
    try{
        await mongoose.connect(LINK);
        app.listen(PORT , () => {
            console.log(`Server is working on http://localhost:${PORT} Mongo connection status:OK`);
        })
    }catch(e){
        console.error("Error connection to MongoDB" , e);
        
    }
}

startApp()
