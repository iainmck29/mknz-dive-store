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

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
