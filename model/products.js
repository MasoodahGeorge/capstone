import db from '../config/index.js';

const ProductModel = {
    getAllProducts: async (req, res) => {
        try {
          const results = await ProductModel.getAllProducts();
          res.status(200).json({ results }); // Sending wrapped results
        } catch (err) {
          res.status(500).json({ message: 'Error fetching products', error: err.message });
        }
      },
      

    getProductById: async (id) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        try {
            const [results] = await db.promise().query(sql, [id]);
            return results[0]; // Assuming you want the first product object returned
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    createProduct: async (productData) => {
        const { name, description, price, category, image_url } = productData;
        const sql = 'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)';
        try {
            const [results] = await db.promise().query(sql, [name, description, price, category, image_url]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    updateProduct: async (id, productData) => {
        const { name, description, price, category, image_url } = productData;
        const sql = 'UPDATE products SET name = ?, description = ?, price = ?, category = ?, image_url = ? WHERE id = ?';
        try {
            const [results] = await db.promise().query(sql, [name, description, price, category, image_url, id]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    deleteProduct: async (id) => {
        const sql = 'DELETE FROM products WHERE id = ?';
        try {
            const [results] = await db.promise().query(sql, [id]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    }
};

export default ProductModel;
