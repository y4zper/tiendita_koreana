import mongoose from "mongoose";



export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(error) {
        console.log("Error connecting to MONGODB", error.masssage);
        process.exit(1);
    }
}

//`MongoDB connected: ${conn.connection.host}`