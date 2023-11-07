import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Components/Main-Page/home"));
const ShowProducts = lazy(() => import("../Components/Products/ShowProducts"));
const AddProduct = lazy(() => import("../Components/Products/AddProduct"));
const ProductDetails = lazy(() =>
  import("../Components/Products/ProductDetails")
);
const CancelPage = lazy(() => import("../Components/guestUser/CancelPage"));
const UserSignup = lazy(() => import("../Components/Users/UserSignup"));
const UserLogin = lazy(() => import("../Components/Users/UserLogin"));
const UserLogout = lazy(() => import("../Components/Users/UserLogout"));
const Checkout = lazy(() =>
  import("../Components/guestUser/guestUserCheckout")
);
const CheckoutSuccess = lazy(() =>
  import("../Components/guestUser/SuccessPage")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
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
    </Suspense>
  );
};

export default AppRoutes;
