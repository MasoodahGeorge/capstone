import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Import routes
import cartRoutes from './routes/cartRoute.js';
import productRoutes from './routes/productsRoute.js';
import userRoutes from './routes/usersRoute.js';

// Import error handling middleware
import { errorHandling } from './middleware/errorHandling.js';

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse incoming requests with JSON payloads

// Root route (fixes "Cannot GET /" error)
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Routes
app.use('/api/cart', cartRoutes); // Route for cart-related actions
app.use('/api/products', productRoutes); // Route for product-related actions
app.use('/api/users', userRoutes); // Route for user-related actions

// Error handling middleware (always at the end)
app.use(errorHandling);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
