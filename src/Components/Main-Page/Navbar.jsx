import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/main.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URLS;

function Navbar() {
  const navRef = useRef();

  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = () => {
    fetch(`https://naphtal112.pythonanywhere.com/api/v1/guest_cart/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch cart count.");
        }
      })
      .then((data) => {
        const totalCount = data.cart_items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalPrice = data.total_price;
        setCartCount(totalCount);
        setCartTotalPrice(totalPrice);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <div className="logo-container">
          <a href={"/"}>
            {" "}
            <img src="/images/Logo.png" alt="Logo" className="logo" />
          </a>
          <form className="search-form">
            <div className="search-input">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/#">Events</a>
          <a href="/#">Green School</a>
          <a href="/#">About Us</a>
          <a href="/#">Contact Us</a>
          <Link to="/guest-cart">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            {cartTotalPrice > 0 && (
              <span className="cart-total-price">
                ${cartTotalPrice.toFixed(2)}
              </span>
            )}
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
