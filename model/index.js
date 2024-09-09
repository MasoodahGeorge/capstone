import { Users } from "./users.js";
import { Products } from "./products.js";
import { Cart } from "./cart.js";

const usersFunc = new Users()
const productsFunc = new Products()
const cartFunc = new Cart()

export {
  usersFunc,
  productsFunc,
  cartFunc
};
