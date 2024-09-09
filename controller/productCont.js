const ProductModel = require('../model/products.js');

const ProductController = {
    getAllProducts: (req, res) => {
        ProductModel.getAllProducts((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },

    getProductById: (req, res) => {
        const { id } = req.params;
        ProductModel.getProductById(id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results[0]);
        });
    },

    createProduct: (req, res) => {
        const productData = req.body;
        ProductModel.createProduct(productData, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Product created', productId: result.insertId });
        });
    },

    updateProduct: (req, res) => {
        const { id } = req.params;
        const productData = req.body;
        ProductModel.updateProduct(id, productData, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Product updated' });
        });
    },

    deleteProduct: (req, res) => {
        const { id } = req.params;
        ProductModel.deleteProduct(id, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Product deleted' });
        });
    }
};

module.exports = ProductController;
