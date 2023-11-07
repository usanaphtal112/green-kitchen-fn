import React from "react";
import "../Styles/main.css";
import ShowProducts from "../Products/ShowProducts";
import FeaturedProducts from "../Products/TopCategories";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="box-container">
        <div className="box-content">
          <h2 className="box-title">
            Make a healthy life with fresh vegetables
          </h2>
          <p className="box-text">
            Our platform connects you directly with local farmers. By purchasing
            fresh produce from our farmers.
          </p>
          <div className="box-link">
            <a href="/product-list/" className="box-link-btn">
              Shop Now
            </a>
          </div>
        </div>
        <div className="box-photo">
          <img src="/images/personal_veg.png" alt="Carrot" />
        </div>
      </div>
      <div className="top-categories">
        {/* <h2 className="top-categories-title">Top Categories</h2> */}
        <div className="category-boxes">
          <FeaturedProducts />
        </div>
      </div>

      <div className="featured-container">
        <h2 className="section-title">Featured Vegetables</h2>
        <p className="section-sentence">
          Checkout our fresh and seasonal vegetables from our local farmers.
        </p>
        <ShowProducts />
      </div>

      <div className="box-container">
        <div className="box-content">
          <h2 className="box-title">Order Vegetables online and stay safe</h2>
          <p className="box-text">
            Our platform connects you directly with local farmers. By purchasing
            fresh produce from our farmers.
          </p>
          <div className="box-link">
            <a href="/product-list/" className="box-link-btn">
              Order Now
            </a>
          </div>
        </div>
        <div className="box-photo">
          <img src="/images/veg_1.png" alt="Carrot" />
        </div>
      </div>

      <div className="third-featured-container">
        <div className="left-section">
          <img
            src="/images/front-view-smiley-woman-with-harvest.png"
            alt="personal-veg"
          />
        </div>
        <div className="right-section">
          <h2 className="section-title">Why should you use our service</h2>
          <p className="section-text">
            Our platform connects you directly with local farmers. By purchasing
            fresh produce from our farmers. You're supporting local agriculture.
          </p>
          <ul className="section-list">
            <li className="list-item">Fast and reliable derivery</li>
            <li className="list-item">No additional fees for Orders</li>
            <li className="list-item">We provide the fastest service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
