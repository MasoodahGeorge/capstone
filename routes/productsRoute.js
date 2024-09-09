const express = require('express');
const ProductController = require('../controller/productCont.js');
const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;

import express from 'express';
import { errorHandling } from './middleware/errorHandling.js';

const app = express();

// Define routes and other middleware...

// Error handling middleware (always at the end)
app.use(errorHandling);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
