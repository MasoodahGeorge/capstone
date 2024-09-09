const express = require('express');
const CartController = require('../controller/cartCont.js');

const router = express.Router();

router.get('/:userId', CartController.getCartItems);
router.post('/', CartController.addItemToCart);
router.delete('/:id', CartController.removeItemFromCart);

module.exports = router;
