import CartModel from '../model/cart.js';

const CartController = {
    getCartItems: (req, res) => {
        const { userId } = req.params;
        CartModel.getCartItemsByUserId(userId, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },

    addItemToCart: (req, res) => {
        const { user_id, product_id, quantity } = req.body;
        CartModel.addItemToCart(user_id, product_id, quantity, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Item added to cart' });
        });
    },

    removeItemFromCart: (req, res) => {
        const { id } = req.params;
        CartModel.removeItemFromCart(id, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Item removed from cart' });
        });
    }
};

export default CartController;
