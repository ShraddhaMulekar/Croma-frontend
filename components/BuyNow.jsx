import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { base_URL } from "../config/base.url.js";
import "./BuyNow.css";

const BuyNow = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${base_URL}/product/${productId}`);
        const data = await res.json();
        setProduct(data.product);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleBuyNow = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const totalPrice = product.price * quantity;

      const res = await fetch(`${base_URL}/order/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity, totalPrice }),
      });

      const data = await res.json();
      console.log(data);
      if (data.msg === "Order placed successfully!..") {
        alert("Order Placed Successfully!");
        navigate("/orders");
      }
    } catch (error) {
      console.log("Error placing order:", error);
    }
    setLoading(false);
  };

  if (!product) return <h3>Loading Product...</h3>;

  return (
    <div className="buyNow-wrapper">
      <h2>Confirm Your Order</h2>
      <div className="buy-content">
        <div className="buyNow-container">
          <img src={product.img} alt={product.title} width="200" />
          <h3>{product.title}</h3>
          <p>Price: Rs. {product.price}</p>

          <label>Quantity:</label>
          <span>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </span>

          <p>Total: Rs. {product.price * quantity}</p>
          <div className="buyNow_btns">
            <button onClick={handleBuyNow} disabled={loading}>
              {loading ? "Processing..." : "Order Now"}
            </button>
            <button>
              <Link className="buyNow_cancel_btn" to={"/products"}>
                cancel
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
