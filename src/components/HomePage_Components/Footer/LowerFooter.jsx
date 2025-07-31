import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { MdChatBubbleOutline } from "react-icons/md";
import "./LowerFooter.css";

const LowerFooter = () => {
  return (
    <footer className="Lfooter">
      <div className="footer-container">
        {/* Contact Us */}
        <div className="footer-section contact">
          <h2 className="lFooter-contactUs">Contact us</h2>
          <p>Avinash Sirohi</p>
          <p>Hapur, Uttar Pradesh, India</p>
          <p>avinashsirohi86@gmail.com</p>
          <p className="phone">(+91) 812 631 6558</p>
          <div className="chat-help">
            <MdChatBubbleOutline className="chat-icon" />
            <div>
              <p>Online Chat</p>
              <p>Get Expert Help</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h2>Products</h2>
          <ul className="footer-section_li">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h2>Our company</h2>
          <ul className="footer-section_li">
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms and conditions of use</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h2>Subscribe to newsletter</h2>
          <p>
            Subscribe to our latest newsletter to get news about special
            discounts.
          </p>
          <input type="email" placeholder="Your Email Address" />
          <button>SUBSCRIBE</button>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the terms and conditions and the privacy policy
            </label>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <div className="social-icons">
            <div className="social_icons_div"> <FaFacebookF /></div>
            <div className="social_icons_div"> <FaYoutube /></div>
            <div className="social_icons_div"><FaPinterestP /></div>
            <div className="social_icons_div"><FaInstagram /></div>
           
         
         
          
          
        </div>
        <div className="copyright">
          © 2024 - Avinash Sirohi 
        </div>
        <div className="payment-logos">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
          <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
          <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" />
        </div>
      </div>
    </footer>
  );
};

export default LowerFooter;
