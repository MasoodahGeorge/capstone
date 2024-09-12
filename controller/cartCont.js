import CartModel from '../model/cart.js';

const CartController = {
    getCartItems: async (req, res) => {
        const { userId } = req.params;
        try {
            const results = await CartModel.getCartItemsByUserId(userId);
            res.status(200).json(results);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching cart items', error: err.message });
        }
    },

    addItemToCart: async (req, res) => {
        const { user_id, product_id, quantity } = req.body;
        try {
            await CartModel.addItemToCart(user_id, product_id, quantity);
            res.status(201).json({ message: 'Item added to cart' });
        } catch (err) {
            res.status(500).json({ message: 'Error adding item to cart', error: err.message });
        }
    },

    removeItemFromCart: async (req, res) => {
        const { id } = req.params;
        try {
            await CartModel.removeItemFromCart(id);
            res.status(200).json({ message: 'Item removed from cart' });
        } catch (err) {
            res.status(500).json({ message: 'Error removing item from cart', error: err.message });
        }
    }
};

export default CartController;
