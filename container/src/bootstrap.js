import { mount as mountProducts } from "products/ProductsList";
import { mount as mountCart } from "cart/CartShow";

console.log("Container");

mountProducts(document.querySelector("#dev-products"));
mountCart(document.querySelector("#dev-cart"));
