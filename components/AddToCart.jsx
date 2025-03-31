import React, { useEffect, useState } from "react";
import { base_URL } from "../config/base.url";
import "./AddToCart.css";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [carts, setCarts] = useState(null);

  const fetchCart = async () => {
    let token = localStorage.getItem("token");
    try {
      const res = await fetch(`${base_URL}/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setCarts(data.cart || { items: [] });
      // Save cart length in localStorage
      localStorage.setItem("cartLength", data.cart?.items?.length || 0);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.log("error in add to cart frontend!", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!carts) {
    return <h3>Loading Cart..</h3>;
  }

  // Remove cart
  const handleRemove = async (productId) => {
    let token = localStorage.getItem("token");

    try {
      const res = await fetch(`${base_URL}/cart/deletecart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        // Update the cart state by removing the deleted item
        setCarts((prevCart) => ({
          ...prevCart,
          items: prevCart.items.filter(
            (item) => item.productId._id !== productId
          ),
        }));

        // Update cart length in localStorage
        localStorage.setItem("cartLength", data.cart?.items?.length || 0);
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.log("Error removing product from cart!", error);
    }
  };

  return (
    <div className="cart_wrapper">
      <div className="cart_container">
        <h2>Your Cart</h2>
        <div className="cart_content">
          {carts?.items?.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            carts.items.map((item) => (
              <div key={item.productId._id} className="cart_item">
                <div className="cart_img">
                  <img
                    className="cart_img"
                    src={item.productId.img}
                    alt={item.productId.title}
                  />
                </div>
                <div className="cart_title_qty">
                  <h3 className="cart_title">{item.productId.title}</h3>
                  <p className="cart_qty">Quantity: {item.quantity}</p>
                  <div className="cart_btn_grp">
                    <button onClick={() => handleRemove(item.productId._id)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div>
                  <p className="cart_price">Price: Rs.{item.productId.price}</p>
                </div>
                <div className="cart_buyNow_btn">
                  <button>
                    <Link
                      className="cart_link"
                      to={`/buy/${item.productId._id}`}
                    >
                      Buy Now!
                    </Link>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
