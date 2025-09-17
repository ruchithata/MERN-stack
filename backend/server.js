import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database/db.js';
import productRoutes from './src/routes/productRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/product', productRoutes);

app.listen(PORT, async()=> {
    try{
        await connectDB(MONGO_URI);
        console.log(`Server is running in the port ${PORT}`);
    }
    catch(err){
        console.error("error in running the server", err);
    }
});