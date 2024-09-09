import db from '../config/index.js';

const ProductModel = {
    getAllProducts: (callback) => {
        const sql = 'SELECT * FROM products';
        db.query(sql, callback);
    },

    getProductById: (id, callback) => {
        const sql = 'SELECT * FROM products WHERE id = ?';
        db.query(sql, [id], callback);
    },

    createProduct: (productData, callback) => {
        const { name, description, price, category, image_url } = productData;
        const sql = 'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [name, description, price, category, image_url], callback);
    },

    updateProduct: (id, productData, callback) => {
        const { name, description, price, category, image_url } = productData;
        const sql = 'UPDATE products SET name = ?, description = ?, price = ?, category = ?, image_url = ? WHERE id = ?';
        db.query(sql, [name, description, price, category, image_url, id], callback);
    },

    deleteProduct: (id, callback) => {
        const sql = 'DELETE FROM products WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

export default ProductModel;
