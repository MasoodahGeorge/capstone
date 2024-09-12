import ProductModel from '../model/products.js';

const ProductController = {
    getAllProducts: async (req, res) => {
        try {
            const results = await ProductModel.getAllProducts();
            res.status(200).json({ results }); // Wrap results in an object
        } catch (err) {
            res.status(500).json({ message: 'Error fetching products', error: err.message });
        }
    },

    getProductById: async (req, res) => {
        const { id } = req.params;
        try {
            const results = await ProductModel.getProductById(id);
            if (results.length === 0) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(results[0]);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching product', error: err.message });
        }
    },

    createProduct: async (req, res) => {
        const productData = req.body;
        try {
            const result = await ProductModel.createProduct(productData);
            res.status(201).json({ message: 'Product created', productId: result.insertId });
        } catch (err) {
            res.status(500).json({ message: 'Error creating product', error: err.message });
        }
    },

    updateProduct: async (req, res) => {
        const { id } = req.params;
        const productData = req.body;
        try {
            await ProductModel.updateProduct(id, productData);
            res.status(200).json({ message: 'Product updated' });
        } catch (err) {
            res.status(500).json({ message: 'Error updating product', error: err.message });
        }
    },

    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            await ProductModel.deleteProduct(id);
            res.status(200).json({ message: 'Product deleted' });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting product', error: err.message });
        }
    }
};

export default ProductController;
