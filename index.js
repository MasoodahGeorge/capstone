import express from 'express';
import { errorHandling } from './middleware/errorHandling.js';

const app = express();

// Define routes and other middleware...

// Error handling middleware (always at the end)
app.use(errorHandling);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
