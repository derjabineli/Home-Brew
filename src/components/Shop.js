import React from "react";
import Product from "./Prouct";
import { productsArray, getProductId } from "./productsArray";
import "./Shop.css";

export default function Shop() {
  function addItemToCart(product) {
    let cart = [];
    console.log(product);

    const cartItem = {};

    cart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="container">
      <div className="shop__container">
        <h2 className="section_heading">Shop</h2>
        <div className="shop">
          {productsArray.map((item) => {
            return (
              <Product
                id={item.id}
                image={item.img}
                itemName={item.name}
                price={item.price}
                handleClick={addItemToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
