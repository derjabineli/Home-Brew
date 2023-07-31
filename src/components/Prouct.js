import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Product.css";

export default function Product(props) {
  const id = props.id;
  const image = props.image;
  const itemName = props.itemName;
  const price = props.price;

  const cart = useContext(CartContext);
  const getProductQuantity = cart.getProductQuantity(id);

  return (
    <div className="item">
      <img src={image} alt={itemName} />
      <div className="item__info">
        <p>{itemName}</p>
        <p>${price}</p>
      </div>
      <button
        className="item__button"
        item={props}
        onClick={() => cart.addOneToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  );
}
