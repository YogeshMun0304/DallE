import express from 'express';
import cors from 'cors';

import * as dotenv from 'dotenv'
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/PostRoutes.js'
import DalleRoutes from './routes/DallEroutes.js'

dotenv.config();


const app = express();
app.use(cors()); 
app.use(express.json()); // parse requests of content-type - application/json
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', DalleRoutes)
app.get('/', (req,res)=>{
    res.send('Hello world');
})


const StartServer = () =>{
    app.listen(8080, ()=>{
        console.log(`Server is running on port 8080}`);
    })

}

StartServer();
connectDB();