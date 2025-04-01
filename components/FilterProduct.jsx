import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { base_URL } from "../config/base.url.js";

const FilterProduct = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      const queryParams = new URLSearchParams(location.search);
      const category = queryParams.get("category");

      try {
        let res = await fetch(`${base_URL}product?category=${encodeURIComponent(category)}`);
        let data = await res.json();
        // console.log(data)
        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, [location.search]);

  return (
    <div>
      <h2>Products</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
