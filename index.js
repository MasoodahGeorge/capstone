import express from 'express';
import path from 'path';
import cors from 'cors'; // Import cors
import cartRoutes from './routes/cartRoute.js';
import productRoutes from './routes/productsRoute.js';
import userRoutes from './routes/usersRoute.js';
import { errorHandling } from './middleware/errorHandling.js';

const app = express();
const port = +process.env.PORT || 8080;

// Middleware for serving static files, JSON parsing, URL encoding
app.use(cors()); // This allows cross-origin requests from any domain

app.use(
    express.static(path.resolve(process.cwd(), 'static')), // Serve static files
    express.json(),
    express.urlencoded({ extended: true })
);

// Define routes
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Serve the index.html file from the /static/html directory
app.get('/', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'static', 'html', 'index.html'), (err) => {
        if (err) {
            res.status(500).send('Error loading index.html');
        }
    });
});

// Handle 404 errors for all other routes
app.use((req, res) => {
    res.status(404).json({
        status: 404,
        msg: 'Resource not found'
    });
});

// Error handling middleware (always at the end)
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
