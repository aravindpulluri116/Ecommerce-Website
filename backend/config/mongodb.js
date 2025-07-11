import mongoose from 'mongoose';
import dotenv from 'dotenv'
const connectDB = async () => {
    mongoose.connection.on("connected",()=>{
        console.log("DB Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);


};

export default connectDB;