import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "./modal/Modal";
import { CartContext } from "../CartContext";
import "./Navigation.css";

function Navigation() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkout = async () => {
    await fetch(process.env.BACKEND_URL + "/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          window.location.assign(res.url);
          console.log(res.url);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="nav__container">
        <ul className="nav">
          <li id="logo">
            <Link to="/" className="logo nav__item ">
              HomeBrew
            </Link>
          </li>
          <li id="logo">
            <Link to="/shop" className="nav__item ">
              Shop
            </Link>
          </li>
          <li id="logo">
            <Link to="/community" className="nav__item ">
              Community
            </Link>
          </li>
          <li>
            <div className="nav__right">
              <IconButton aria-label="cart" onClick={handleShow}>
                {" "}
                <StyledBadge
                  badgeContent={productsCount}
                  color="primary"
                  style={{ "z-index": "0" }}
                >
                  {" "}
                  <ShoppingCartIcon />{" "}
                </StyledBadge>{" "}
              </IconButton>
            </div>
          </li>
        </ul>
        <Modal
          show={show}
          onHide={handleClose}
          total={productsCount}
          cart={cart}
          checkout={checkout}
        />
      </div>
    </>
  );
}

export default Navigation;
