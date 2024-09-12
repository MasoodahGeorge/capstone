import db from '../config/index.js';

const CartModel = {
    getCartItemsByUserId: async (userId) => {
        const sql = 'SELECT cart.id, products.name, products.price, cart.quantity FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = ?';
        try {
            const [results] = await db.promise().query(sql, [userId]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    addItemToCart: async (userId, productId, quantity) => {
        const sql = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
        try {
            const [results] = await db.promise().query(sql, [userId, productId, quantity]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    removeItemFromCart: async (id) => {
        const sql = 'DELETE FROM cart WHERE id = ?';
        try {
            const [results] = await db.promise().query(sql, [id]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    }
};

export default CartModel;
