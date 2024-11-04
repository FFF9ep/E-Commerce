const express = require('express');
const router = express.Router();

// Mock data keranjang
let cartItems = [];

// Menambahkan item ke keranjang
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
