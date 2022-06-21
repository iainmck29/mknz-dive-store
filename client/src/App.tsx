import "dotenv/config";
import React from 'react';
import './App.css';
import {Route, Routes } from "react-router-dom"
import NavBar from './components/nav/NavBar';
import Home from "./components/home/Home"
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import ProductPage from './components/product/ProductPage';
import CartPage from './components/cart/CartPage';
import Logout from './components/logout/Logout';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './components/login/userSlice';
import { Checkout } from './components/checkout/Checkout';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutSuccess from './components/checkout/CheckoutSuccess';
import Protected from './components/ProtectedRoute';


//@ts-ignore
const stripePromise = loadStripe(process.env.STRIPE_TEST_KEY);



function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="App">
    <NavBar />
      <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Login />} />
        <Route path="/cart" element={
          <Protected isLoggedIn={isLoggedIn}>
            <CartPage />
          </Protected>
        } />
        <Route path="/profile/:id" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Profile />
          </Protected>
        } />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/checkout" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Checkout />
          </Protected>} />
        <Route path="/checkout/:orderID/success" element={<CheckoutSuccess />} />
      </Routes>
      </Elements>
    </div>
  );
}

export default App;
