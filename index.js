const express = require('express');
const cartRoutes = require('./routes/cartRoute');
const productRoutes = require('./routes/productsRoute');
const userRoutes = require('./routes/usersRoute');
const { errorHandling } = require('./middleware/errorHandling');

const app = express();

app.use(express.json()); // Support for parsing JSON

// Routes
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Error handling middleware
app.use(errorHandling);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
