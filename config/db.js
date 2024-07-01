import mongoose from "mongoose";
import 'dotenv/config';



const mongoUri = process.env.MONGO_URL;


// connecting to our db

export const dbConnection = ()=>{
    mongoose.connect(mongoUri).then(() => {
        console.log('Database is connected');
    }) 
};

