import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide product title'],
        maxlength: 100
    },
    description: {
        type: String,
        required: [true, 'Please provide product description'],
        maxlength: 1000
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
        min: 0
    }
});

export default mongoose.model('Product', ProductSchema);
