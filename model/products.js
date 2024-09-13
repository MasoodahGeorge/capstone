import db from '../config/index.js';

const ProductModel = {
    getAllProducts: async () => {
        const sql = 'SELECT * FROM products';
        try {
            const [results] = await db.promise().query(sql);
            if (results.length === 0) {
                throw new Error('No products found');
            }
            return results;
        } catch (error) {
            console.error('Error in getAllProducts:', error.message);
            throw error;
        }
    },
      

    getProductById: async (id) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        try {
            const [results] = await db.promise().query(sql, [id]);
            if (results.length === 0) { // If no product is found
                throw new Error(`Product with id ${id} not found`);
            }
            return results[0]; // Return the product
        } catch (error) {
            console.error('Error in getProductById:', error.message);
            throw error;
        }
    },

    createProduct: async (productData) => {
        const { name, description, price, category, image_url } = productData;
        const sql = 'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)';
        try {
            const [result] = await db.promise().query(sql, [name, description, price, category, image_url]);
            if (!result.insertId) {
                throw new Error('Product creation failed');
            }
            return result; // Return result to access insertId
        } catch (error) {
            console.error('Error in createProduct:', error.message);
            throw error;
        }
    },

    updateProduct: async (id, productData) => {
        const { name, description, price, category, image_url } = productData;
        const sql = 'UPDATE products SET name = ?, description = ?, price = ?, category = ?, image_url = ? WHERE id = ?';
        try {
            const [result] = await db.promise().query(sql, [name, description, price, category, image_url, id]);
            if (result.affectedRows === 0) {
                throw new Error(`Product with id ${id} not updated`);
            }
            return result; // Return affected rows
        } catch (error) {
            console.error('Error in updateProduct:', error.message);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        const sql = 'DELETE FROM products WHERE id = ?';
        try {
            const [result] = await db.promise().query(sql, [id]);
            if (result.affectedRows === 0) {
                throw new Error(`Product with id ${id} not deleted`);
            }
            return result;
        } catch (error) {
            console.error('Error in deleteProduct:', error.message);
            throw error;
        }
    }    
};

export default ProductModel;
