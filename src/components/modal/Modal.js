import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct";
import EastIcon from "@mui/icons-material/East";
import "./Modal.css";

export default function Modal(props) {
  const cart = useContext(CartContext);
  const show = props.show;
  const onHide = props.onHide;

  return (
    <div className="modal" style={{ display: show ? "flex" : "none" }}>
      <div className="modal-content">
        <div className="modal__top">
          <p className="cartHeading">Your Cart</p>
          <p className="modal__exit" onClick={onHide}>
            X
          </p>
        </div>
        <div>
          {props.total > 0 ? (
            <div className="modal__items">
              <div className="modal__cart_items">
                {cart.items.map((currentProduct, idx) => (
                  <CartProduct
                    key={idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                    cart={cart}
                    addOne={props.addOne}
                  />
                ))}
              </div>
              <div className="modal__bottom">
                <div className="modal__price">
                  <p>Shipping & Taxes will be calculated at checkout.</p>
                  <h3 className="modal__price_total">
                    Total: ${cart.getTotalCost()}
                  </h3>
                </div>
                <div className="modal__checkout" onClick={props.checkout}>
                  <h3>Checkout</h3>
                  <EastIcon />
                </div>
              </div>
            </div>
          ) : (
            <h2 className="modal__empty">There are no items in your cart!</h2>
          )}
        </div>
      </div>
    </div>
  );
}
