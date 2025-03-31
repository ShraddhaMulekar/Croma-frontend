import React, { useEffect, useState } from "react";
import { base_URL } from "../config/base.url";
import "./ProductPage.css";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  const productFetch = async () => {
    try {
      const res = await fetch(`${base_URL}/product/display`);
      const data = await res.json();
      console.log(data.product);
      setProducts(data.product);
    } catch (error) {
      // console.log("error in product fetch", error);
    }
  };

  useEffect(() => {
    productFetch();
  }, []);

  // console.log(products);
  return (
    <div className="product_wrapper">
      <div className="product_container">
        {products.map((product) => {
          return (
            <div className="product_content" onClick={()=>navigate(`/product/product_detail/${product._id}`)}>
              <div className="product_content_img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product_content_data">
                <div>
                  <h3>{product.title}</h3>
                </div>
                <div className="category_subCategory">
                  <p>Category: {product.category}</p>
                  <p>{product.subCategory}</p>
                </div>
                <div className="price">
                  <p>Price: Rs.{product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
