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
import { selectCurrentUser, selectIsLoggedIn } from './components/login/userSlice';
import { Checkout } from './components/checkout/Checkout';

function App() {
  const user = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="App">
    <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Login />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
