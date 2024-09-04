import express from 'express';
import { productRouter } from './productCont.vue';

const app = express();

// Use the productRouter for all routes under /products
app.use('/products', productRouter);

// Set the server to listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
