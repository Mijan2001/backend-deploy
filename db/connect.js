import mongoose from 'mongoose';

const connectDB = url => {
    return mongoose
        .connect(url)
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.error('Database connection error:', err));
};

export default connectDB;
