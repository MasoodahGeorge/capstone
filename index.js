import express from 'express';
import cartRoutes from './routes/cartRoute.js';
import productRoutes from './routes/productsRoute.js';
import userRoutes from './routes/usersRoute.js';
import { errorHandling } from './middleware/errorHandling.js';

const app = express();

app.use(express.json());

// Routes
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Error handling middleware (always at the end)
app.use(errorHandling);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
