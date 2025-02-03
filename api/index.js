// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from '../db/connect.js';
import productRoutes from '../routes/productRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

// Connect to the database
connectDB(process.env.MONGO_URI);

// Export the app instead of listening
export default app;
