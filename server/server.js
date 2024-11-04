require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.json());
app.use('/api', cartRoutes);
// Routes
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/products', require('./routes/productRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

