import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { BsPerson } from "react-icons/bs";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoCartOutline, IoLocationOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { base_URL } from "../config/base.url.js";

const Navbar = () => {
  //menu bar
  const [categories, setCategories] = useState([]);
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);

  //search bar
  const [searchInput, setSearchInput] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [isDropDownSearchInput, setIsDropDownSearchInput] = useState(false);
  const navigate = useNavigate();

  // cart counting
  const [cartcount, setCartCount] = useState(0);

  const addToCartCount = () => {
    const cartLength = localStorage.getItem("cartLength") || 0;
    setCartCount(cartLength);
  };

  useEffect(() => {
    addToCartCount();
  });

  // for handle menu bar
  const handleMenuBar = async () => {
    try {
      let res = await fetch(`${base_URL}/product/display`);
      let data = await res.json();
      // console.log(data.product);

      if (Array.isArray(data.product)) {
        const uniqueCategory = [
          ...new Set(data.product.map((item) => item.category)),
        ];
        setCategories(uniqueCategory);
      } else {
        console.log("unexpected response", data);
        setCategories([]);
      }

      setIsDropDownMenu(!isDropDownMenu);
    } catch (error) {
      console.log(
        "error in catehgory handle menu bar from frontend line !",
        error
      );
    }
  };

  // for handle menu bar
  const handleChangeSearchInput = async (e) => {
    let value = e.target.value;
    setSearchInput(value);

    if (value.length > 1) {
      console.log(value);
      try {
        let res = await fetch(
          `${base_URL}/product?search=${encodeURIComponent(value)}`
        );
        let data = await res.json();
        console.log(data);

        if (Array.isArray(data.fetchProduct) && data.fetchProduct.length > 0) {
          setSearchSuggestion(data.fetchProduct);
          setIsDropDownSearchInput(true);
        } else {
          setSearchSuggestion([]);
          setIsDropDownSearchInput(false);
        }
      } catch (error) {
        console.log("error in fetching search result in frontend", error);
        setIsDropDownSearchInput(false);
      }
    } else {
      setSearchSuggestion([]);
      setIsDropDownSearchInput(false);
    }
  };

  //handle selecting search suggestion
  const handleSearchSuggestion = (product) => {
    setSearchInput(product.title);
    setIsDropDownSearchInput(false);
    setSearchInput("");
  };

  // menu bar - category clicking
  const handleCategoryClick =(category)=>{
    navigate(`/products?category=${encodeURIComponent(category)}`)
  }

  return (
    <div>
      <div className="navbar-container">
        {/* logo */}
        <div className="logo-nav">
          <Link to="/">
            <img
              src="https://i.imgur.com/LKF7loW.png"
              alt="croma_logo"
              className="cromaLogo-nav"
            />
          </Link>
        </div>

        {/* menu bar */}
        <div className="menu-Icon-nav">
          <div className="menu-bar" onClick={handleMenuBar}>
            <div className="menu_icon">
              <span className="menuIcon-nav">
                <IoIosMenu />
              </span>
            </div>
            <span className="menu-nav">Menu</span>
          </div>
          <>
            {isDropDownMenu && categories.length > 0 && (
              <ul className="dropdown_ul">
                {categories.map((category, index) => {
                  return (
                    <li className="dropdown_li" key={index} onClick={()=>handleCategoryClick(category)}>
                        {category}
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        </div>

        {/* search bar */}
        <div className="search_functionality">
          <div className="search-button">
            <input
              type="text"
              className="searchInput-nav"
              value={searchInput}
              onChange={handleChangeSearchInput}
              placeholder="Search Products.."
            />
            <span className="serachIcon-nav">
              <IoIosSearch />
            </span>
          </div>
          <>
            {isDropDownSearchInput && searchSuggestion.length > 0 && (
              <ul className="search-dropdown-ul">
                {searchSuggestion.map((product, index) => (
                  <li
                    className="search-dropdown-li"
                    key={index}
                    onClick={() => handleSearchSuggestion(product)}
                  >
                    <Link className="search_bar_product_list" to={"/products"}>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        </div>

        {/* Cart & Login Section */}
        <div className="cart-login-location">
          <span className="location-nav">
            <IoLocationOutline />
          </span>
          <Link to={"/sign_in"}>
            <span className="login-nav">
              <BsPerson />
            </span>
          </Link>
          <div className="cart-inc-nav">
            <Link className="cart-inc-nav-link" to={"/add_to_cart"}>
              <span className="cart-nav">
                <IoCartOutline />
              </span>
              <span className="inc-cart-nav">{cartcount}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
