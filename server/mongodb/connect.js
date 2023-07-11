import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://techyogimun:yogesh@cluster0.ybt2qzl.mongodb.net/DALL_E', {
        //   useCreateIndex: true,
        //   useFindAndModify: false,
        useNewUrlParser: true,
        //   useUnifiedTopology: true,
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    }

export default connectDB;