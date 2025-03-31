import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import { base_URL } from "../config/base.url.js";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const navigate = useNavigate()

  const fetchProductDetail = async () => {
    try {
      const res = await fetch(`${base_URL}/product/${id}`);
      const data = await res.json();
    //   console.log(data.product);
      setProducts(data.product);
    } catch (error) {
      console.log("error in product fetch", error);
    }
  };

  //add to cart
  const addToCart = async () => {
    const token = localStorage.getItem("token");
    console.log("Token in addToCart:", token);

    if (!token) {
        alert("Please log in first!");
        return;
    }
    try {
      const res = await fetch(`${base_URL}/cart/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send auth token
        },
        body: JSON.stringify({ productId: id, quantity: 1 }),
      });

      const data = await res.json();
      console.log(data)
      if (res.ok) {
        alert("Product added to cart!");
        navigate("/add_to_cart"); // Redirect to cart page
      } else {
        alert("Please Log in first!" || "Error adding product to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

//   console.log(product);
  return (
    <div className="product_wrapper">
        <p className="product-wrapper-back"><Link className="back" to={"/products"}>Back</Link></p>
      <div className="product_detail_container">
        <div className="product_detail_content">
          <div className="product_detail_content_img">
            <img src={product.img} alt={product.title} />
          </div>
          <div>
          <div className="product_detail_content_data">
            <div>
              <h3>{product.title}</h3>
            </div>
            <div className="product_detail_category_subCategory">
              <p>Category: {product.category}</p>
              <p>{product.subCategory}</p>
            </div>
            <div className="product_detail_price">
              <p>Price: Rs.{product.price}</p>
            </div>
            <div className="product_detail_desc">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="product_detail_button">
            <button onClick={addToCart}>Add to Cart</button>
            <button><Link className="buyNOw" to={`/buy/${product._id}`}>Buy Now!</Link></button>
        </div>
        </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
