const db = require('../db');

const CartModel = {
    getCartItemsByUserId: (userId, callback) => {
        const sql = 'SELECT cart.id, products.name, products.price, cart.quantity FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = ?';
        db.query(sql, [userId], callback);
    },

    addItemToCart: (userId, productId, quantity, callback) => {
        const sql = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
        db.query(sql, [userId, productId, quantity], callback);
    },

    removeItemFromCart: (id, callback) => {
        const sql = 'DELETE FROM cart WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = CartModel;
