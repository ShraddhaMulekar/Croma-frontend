import React from "react";
import "./Footer.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-conatainer">
      <div className="head-footer">
        <label htmlFor="">Connect with us</label>
        <div className="input-arrow-head-footer">
          <input type="text" placeholder="Enter Email-Id" className="input-head-footer" />
          <span>
            <IoIosArrowRoundForward />
          </span>
        </div>
        <div className="logo-head-footer">
          <span>
            <AiOutlineYoutube />
          </span>
          <span>
            <MdOutlineFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaTwitterSquare />
          </span>
        </div>
        <p>© Copyright 2025 Croma. All rights reserved</p>
      </div>
      <hr className="line" />
      <div className="body-footer">
        <label htmlFor="">Useful Links</label>
        <div className="body-footer-content">
        <div>
          <p>About Croma</p>
          <p>Help And Support</p>
          <p>FAQs</p>
          <p>Buying Guide</p>
          <p>Return Policy</p>
          <p>B2B Orders</p>
          <p>Store Locator</p>
          <p>E-Waste</p>
          <p>Franchise Opportunity</p>
        </div>
        <div>
          <p>Site Map</p>
          <p>Careers At Croma</p>
          <p>Terms of Use</p>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Unboxed</p>
          <p>Gift Card</p>
          <p>Croma E-Star</p>
        </div>
        </div>
      </div>
      <hr className="line" />
      <div className="foot-footer">
        <label htmlFor="">Products</label>
        <div className="body-footer-content">
        <div>
          <p>Televisions & Accessories</p>
          <p>Home Appliances</p>
          <p>Phones & Wearables</p>
          <p>Computers & Tablets</p>
          <p>Kitchen Appliances</p>
          <p>Audio & Video</p>
          <p>Health & Fitness</p>
        </div>
        <div>
          <p>Grooming & Personal Care</p>
          <p>Cameras & Accessories</p>
          <p>Smart Devices</p>
          <p>Gaming</p>
          <p>Accessories</p>
          <p>Top Brands</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
