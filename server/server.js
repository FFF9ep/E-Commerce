require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const router = express.Router();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

router.post('/cart', (req, res) => {
    const { id, name, price } = req.body;
    cartItems.push({ id, name, price });
    res.status(201).json({ message: 'Item ditambahkan ke keranjang' });
});

// Mendapatkan item dari keranjang
router.get('/cart', (req, res) => {
    res.json(cartItems);
});

// Checkout
router.post('/checkout', (req, res) => {
    cartItems = [];
    res.status(200).json({ message: 'Checkout berhasil!' });
});

module.exports = router;

