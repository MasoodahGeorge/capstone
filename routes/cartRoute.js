import express from 'express';
import CartController from '../controller/cartCont.js';

const router = express.Router();

router.get('/:userId', CartController.getCartItems);
router.post('/', CartController.addItemToCart);
router.delete('/:id', CartController.removeItemFromCart);


export default router;