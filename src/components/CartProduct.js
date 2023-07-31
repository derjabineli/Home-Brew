import { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "./productsArray";
import "./CartProduct.css";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  console.log(cart.getTotalCost());

  return (
    <>
      <div className="cartProduct">
        <img
          className="cardProduct__img"
          alt={productData.name}
          src={productData.img}
        />
        <div>
          <p className="cardProduct__text">{productData.name}</p>
          <div className="cardProduct__quantity">
            <p className="cardProduct__text">Qty: {quantity}</p>
            <button onClick={() => cart.removeOneToCart(id)}>-</button>
            <button onClick={() => cart.addOneToCart(id)}>+</button>
          </div>
          <p className="cardProduct__text">
            ${(quantity * productData.price).toFixed(2)}
          </p>
        </div>
        <button
          className="cartProduct__remove"
          onClick={() => cart.deleteFromCart(id)}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default CartProduct;
