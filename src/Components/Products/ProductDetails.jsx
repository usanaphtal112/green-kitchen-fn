import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { addToCart } from "../Utility/productUtilities";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://greenkitchen.vercel.app/api/v1/products/${id}/`
        );

        if (response.status === 200) {
          const data = response.data;
          setProduct(data);
        } else {
          throw new Error("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, navigate);
  };

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt="Product" />
      </div>
      <div className="product-details-box">
        <ul>
          <li key={product.id} className="Product-detail-list">
            <p className="product-list-name">{product.name}</p>
            <p className="product-list-description">{product.description}</p>
            <div className="Product-price-details">
              <p className="product-price">{product.price} FRW</p>
              <p className="product-nickname">Umufungo 1</p>
            </div>
            <div className="cart-buy-buttons">
              <button className="cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <Link to="/place-order">
                <button className="buy-btn">Buy Now</button>
              </Link>
            </div>

            <div className="seller-section">
              <img
                className="seller-avatar"
                src="/images/seller-avatar.png"
                alt="Seller Avatar"
              />
              <div className="seller-info">
                <p className="seller-name">{product.created_by}</p>
                <p className="seller-address">Nyagatare, Bugarama</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
