import React, { useState, useEffect } from "react";
import { base_URL } from "../config/base.url.js";
import "./order.css"
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`${base_URL}/order`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data);
        if (data.order && Array.isArray(data.order)) {
          setOrders(data.order);
        } else {
          setOrders([]); // ✅ Ensures no undefined issues
        }
        // setOrders(data.order);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="order_wrapper">
      <Link className="back_button" to={"/products"}><h4>Back</h4></Link>
      <div>
      <h2>Your Orders</h2>
      <div className="order_container">
        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((order) => (
            <div className="order_content" key={order._id}>
              {order.productId ? (
                <div className="order_data">
                  <img
                    src={order.productId.img}
                    alt={order.productId.title}
                    width="100"
                  />
                  <div className="order_detail">
                  <h3>{order.productId.title}</h3>
                  <p>Quantity: {order.quantity}</p>
                  <p>Total Price: Rs. {order.totalPrice}</p>
                  <p>Status: {order.status || "Pending"}</p>
                  </div>
                </div>
              ) : (
                <p style={{ color: "red" }}>
                  Error: Product details not available
                </p>
              )}
            </div>
          ))
        )}
      </div>
      </div>
    </div>
  );
};

export default Orders;
