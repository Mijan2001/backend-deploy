import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// POST a new product
router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        console.log('product : ', product);
        res.status(201).json({ product });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

export default router;
