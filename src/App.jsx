import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Main-Page/Navbar";
import Footer from "./Components/Main-Page/footer";
import Home from "./Components/Main-Page/home";
import ShowProducts from "./Components/Products/ShowProducts";
import AddProduct from "./Components/Products/AddProduct";
import ProductDetails from "./Components/Products/ProductDetails";

import GuestCart from "./Components/guestUser/guestCart";

import UserSignup from "./Components/Users/UserSignup";
import UserLogin from "./Components/Users/UserLogin";
import UserLogout from "./Components/Users/UserLogout";
import { AuthProvider } from "./Components/Authentications/Authentication";

import { loadStripe } from "@stripe/stripe-js/pure";
import Checkout from "./Components/guestUser/guestUserCheckout";
import CheckoutSuccess from "./Components/guestUser/SuccessPage";
import CheckoutCancel from "./Components/guestUser/CancelPage";

import { VITE_APP_STRIPE_KEY } from "./Components/Config/config";

import OrderForm from "./Components/Orders/order-form";

const stripe_key = VITE_APP_STRIPE_KEY;
const stripePromise = loadStripe(stripe_key);

function App() {
  return (
    <div className="app-container">
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ShowProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/guest-cart" element={<GuestCart />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/logout" element={<UserLogout />} />
            <Route path="/place-order" element={<OrderForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/success/" element={<CheckoutSuccess />} />
            <Route path="/checkout/failed/" element={<CheckoutCancel />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
